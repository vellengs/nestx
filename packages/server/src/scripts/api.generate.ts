import axios, { AxiosInstance } from 'axios';
import * as path from 'path';
import * as https from 'https';
import * as fs from 'fs';
import * as shell from "shelljs";

const unzip = require('unzip');
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
    const zipFilePath = path.resolve(process.cwd(), 'swagger.zip');
    const templateFolder = path.resolve(process.cwd(), 'decompress', `${name}-client`);
    const decompressFolder = path.resolve(process.cwd(), 'decompress');

    return new Promise((resolve) => {
        response.data.pipe(fs.createWriteStream(zipFilePath))
            .on('finish', () => {
                fs.createReadStream(zipFilePath).pipe(unzip.Extract({ path: 'decompress' }))
                    .on('close',
                        async () => {
                            console.log('... extracted');
                            fs.unlinkSync(zipFilePath);
                            console.log('... deleted zip file');
                            await removeFolder(dist); // for override folder;
                            fs.renameSync(templateFolder, dist);
                            await removeFolder(decompressFolder);
                            resolve(dist);
                        });
            });
    })
}

async function generate(name: string, dist: string, options?: { [key: string]: any }) {
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

async function generateAll() {
    const axiosDist = path.resolve(process.cwd(), './../react/src/generated');
    await generate('typescript-axios', axiosDist);
    const angularDist = path.resolve(process.cwd(), './../angular/src/generated');
    await generate('typescript-angular', angularDist, { ngVersion: '6.0' });
    const testingFolder = path.resolve(process.cwd(), './../testing/generated');
    shell.rm('-rf', testingFolder);
    shell.cp("-R", axiosDist, testingFolder);
}

generateAll().then(() => {
    console.log('generated');
});