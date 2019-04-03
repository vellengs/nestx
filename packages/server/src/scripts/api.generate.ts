import axios from 'axios';
import * as path from 'path';
import * as https from 'https';
import * as fs from 'fs';
import * as shell from "shelljs";


const unzip = require('unzip');
const rimraf = require('rimraf');

const ClientName = 'typescript-axios';
const gateway = `https://api.openapi-generator.tech/api/gen/clients/${ClientName}`;

async function loadSwagger() {

    /** 读取 swagger.json 接口文档文件 */
    const jsonPath = path.resolve(process.cwd(), 'src/swagger', 'swagger.json');
    const json = require(jsonPath);

    const client = axios.create({
        httpsAgent: new https.Agent({
            rejectUnauthorized: false
        })
    });

    /**
     * 提交 post 到服务器并获得下载链接
     */
    const result = await client.post(gateway, { spec: json });
    if (result.data && result.data.link) {
        const response = await client({
            method: 'GET',
            url: result.data.link,
            responseType: 'stream'
        })
        const local = path.resolve(process.cwd(), 'swagger.zip');
        const generatedFolder = path.resolve(process.cwd(), './../react/src/generated');
        const testingFolder = path.resolve(process.cwd(), './../testing/generated');
        const templateFolder = path.resolve(process.cwd(), 'decompress', `${ClientName}-client`);
        const decompress = path.resolve(process.cwd(), 'decompress');

        // 处理下载压缩包文件，解压并删除临时文件
        response.data.pipe(fs.createWriteStream(local)).on('finish', (done: any) => {
            fs.createReadStream(local).pipe(unzip.Extract({ path: 'decompress' })).on('close',
                async (done: any) => {
                    // await sleep(2000);
                    console.log('extracted ...');
                    fs.unlinkSync(local);
                    console.log('deleted zip file ...');
                    await removeFolder(generatedFolder);
                    console.log('removed generated ...');
                    // await sleep(1000);
                    fs.renameSync(templateFolder, generatedFolder);
                    console.log('copy generated ...');
                    await removeFolder(decompress);
                    shell.rm('-rf', testingFolder);
                    shell.cp("-R", generatedFolder, testingFolder);
                    console.log('done ...');
                });
        });
    }

    console.log('load swagger ...');
}

/**
 * 若已经生成，则删除文件夹
 * @param folder 文件夹
 */
async function removeFolder(folder: string) {
    if (fs.existsSync(folder)) {
        await new Promise((resolve) => {
            rimraf(folder, () => {
                resolve(true);
            });
        })
    }
}

loadSwagger();