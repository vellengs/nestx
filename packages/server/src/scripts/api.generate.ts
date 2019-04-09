import axios, { AxiosInstance } from 'axios';
import * as path from 'path';
import * as https from 'https';
import * as fs from 'fs';
import * as shell from "shelljs";

const unzip = require('unzip2');
const rimraf = require('rimraf');

function getGateway(name: string) {
    return `https://api.openapi-generator.tech/api/gen/clients/${name}`;
}

function loadSwaggerFile() {
    const jsonPath = path.resolve(process.cwd(), 'src/swagger', 'swagger.json');
    const json = require(jsonPath);
    return json;
}

async function removeFolder(folder: string) {
    if (fs.existsSync(folder)) {
        await new Promise((resolve) => {
            rimraf(folder, () => {
                resolve(true);
            });
        })
    }
}

async function saveFile(name: string, client: AxiosInstance, downloadLink: string, dist: string): Promise<string> {
    const response = await client({
        method: 'GET',
        url: downloadLink,
        responseType: 'stream'
    })
    const zipFilePath = path.resolve(process.cwd(), `${name}-swagger.zip`);
    const decompressName = `decompress_${name}`;
    const templateFolder = path.resolve(process.cwd(), decompressName, `${name}-client`);
    const decompressFolder = path.resolve(process.cwd(), decompressName);

    return new Promise((resolve) => {
        response.data.pipe(fs.createWriteStream(zipFilePath))
            .on('finish', () => {
                fs.createReadStream(zipFilePath).pipe(unzip.Extract({ path: decompressName }))
                    .on('close',
                        async () => {
                            console.log(name, '... extracted');
                            fs.unlinkSync(zipFilePath);
                            console.log(name, '... deleted zip file');
                            await removeFolder(dist); // for override folder;
                            console.log(name, '... cleared dist');
                            fs.renameSync(templateFolder, dist);
                            await removeFolder(decompressFolder);
                            console.log(name, '... cleared decompress folder');
                            resolve(dist);
                        });
            });
    })
}

async function generate(name: string, dist: string, options?: { [key: string]: any }) {
    console.log('start generate', name);
    const gateway = getGateway(name);
    const json = loadSwaggerFile();
    const client = axios.create({
        httpsAgent: new https.Agent({
            rejectUnauthorized: false
        })
    });
    const res = await client.post(gateway, { spec: json, options });
    if (res.data && res.data.link) {
        await saveFile(name, client, res.data.link, dist);
    }
}

async function generateAxios() {
    const current = process.cwd();
    const axiosDist = path.resolve(current, './../react/src/generated');
    await generate('typescript-axios', axiosDist);
    const testingFolder = path.resolve(current, './../testing/generated');
    shell.rm('-rf', testingFolder);
    shell.cp("-R", axiosDist, testingFolder);
}

async function generateAngular() {
    const angularDist = path.resolve(process.cwd(), './../angular/src/generated');
    await generate('typescript-angular', angularDist, { ngVersion: '6.0' });
}

async function generateAll() {
    await generateAngular();
    await generateAxios();
}

generateAll().then(() => {
    console.log('generated');
});