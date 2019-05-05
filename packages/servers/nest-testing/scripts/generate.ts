import * as swaggerParser from 'swagger-parser';
import * as path from 'path';
import * as handlebars from 'handlebars';
import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'fs';
import * as lodash from 'lodash';
interface Parameter {
    description?: string;
    name: string;
    required?: boolean;
    children?: Parameter[];
    schema?: {
        $ref: string;
    };
    type?: string;
    format?: string;
    properties?: {
        [key: string]: Parameter;
    };
}

interface Context {
    definitions: {
        [key: string]: {
            description: string;
            properties: {
                [key: string]: Parameter;
            },
            required: string[];
            type: string;
        }
    };
    [key: string]: any;
}

function loadSwaggerFile() {
    const jsonPath = path.resolve(process.cwd(), 'generated', 'swagger.json');
    const json = require(jsonPath);
    return json;
}

function plainProperties(props: {
    [key: string]: Parameter;
}, requiredFields: string[] = []): Parameter[] {

    const result = Object.keys(props).map(item => {
        const value = props[item];
        const { description, type, format, properties } = value;
        const name = item;
        const required = requiredFields.includes(item);
        return { name, description, required, type, format, properties };
    });

    return result;
}

function parseParams(params: Parameter[], context: Context): Parameter[] {
    if (!params.length)
        return [];

    const result = params.map(p => {
        const { name, description, required, type, format, schema, properties } = p;
        const item = {
            name,
            description,
            required,
            type: type ? type : 'object',
            format,
            properties
        }

        if (schema && schema.$ref) {
            const paths = schema.$ref.split('/');
            item.properties = context.definitions[paths[paths.length - 1]].properties;
        }
        return item;
    });

    if (result.length === 1 && result[0].properties) {
        return [{
            name: 'reqBody',
            children: plainProperties(result[0].properties)
        }]
    }
    return result;
}

async function generateTestFiles() {
    const distFolder = path.resolve(process.cwd(), 'dist', 'apis');
    if (!existsSync(distFolder) && mkdirSync) {
        mkdirSync(distFolder, { recursive: true });
    }
    const file = await loadSwaggerFile();
    const context = await swaggerParser.parse(file);
    const paths = Object.keys(context.paths);
    const files = new Map();
    const templatePath = path.resolve(process.cwd(), 'templates', 'api.hbs');
    const template = readFileSync(templatePath).toString();
    const compiledTemplate = handlebars.compile(template);

    for (let url of paths) {
        if (url) {
            const names = url.split('/');
            let fileName = names.length > 1 ? names[1] : names[0];
            fileName = fileName || '_root';

            if (!files.has(fileName)) {
                files.set(fileName, []);
            }

            const item = context.paths[url];
            const methods = Object.keys(item);
            const node = files.get(fileName);

            for (let method of methods) {
                const entry = item[method];
                const tag = entry.tags ? entry.tags[0] : 'default';
                const params = parseParams(entry.parameters, context);
                const paramsNames = params.map(p => p.name).join(', ');
                const doc = {
                    name: (entry.description || ''),
                    method: method,
                    operationId: lodash.lowerFirst(entry.operationId),
                    produces: entry.produces,
                    parameters: params,
                    paramsNames,
                    tag: tag,
                    responses: entry.responses,
                    state: Object.keys(entry.responses)[0],
                    path: `[${method}] ${url}`
                }
                node.push(doc);
            }
        }
    }

    for (const [key, items] of files) {
        const content = compiledTemplate({
            title: key,
            methods: items
        });
        const dist = path.resolve(distFolder, key + '.temp.ts');
        writeFileSync(dist, content);
    }
}

generateTestFiles();