#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const argparse_1 = require("argparse");
const metadataGenerator_1 = require("./metadata/metadataGenerator");
const generator_1 = require("./swagger/generator");
const packageJson = require(`../package.json`);
const workingDir = process.cwd();
const versionDefault = getPackageJsonValue('version');
const nameDefault = getPackageJsonValue('name');
const descriptionDefault = getPackageJsonValue('description');
const licenseDefault = getPackageJsonValue('license');
const parser = new argparse_1.ArgumentParser({
    addHelp: true,
    description: 'Typescript-REST Swagger tool',
    version: packageJson.version
});
parser.addArgument(['-c', '--config'], {
    help: 'The swagger config file (swagger.json).'
});
parser.addArgument(['-t', '--tsconfig'], {
    action: 'storeTrue',
    defaultValue: false,
    help: 'Load tsconfig.json file'
});
parser.addArgument(['-p', '--tsconfig_path'], {
    help: 'The tsconfig file (tsconfig.json) path. Default to {cwd}/tsconfig.json.'
});
const parameters = parser.parseArgs();
const config = getConfig(parameters.config);
const compilerOptions = getCompilerOptions(parameters.tsconfig, parameters.tsconfig_path);
const swaggerConfig = validateSwaggerConfig(config.swagger);
const metadata = new metadataGenerator_1.MetadataGenerator(swaggerConfig.entryFile, compilerOptions).generate();
new generator_1.SpecGenerator(metadata, swaggerConfig)
    .generate(swaggerConfig.outputDirectory, swaggerConfig.yaml)
    .then(() => {
    console.info('Generation completed.');
})
    .catch((err) => {
    console.error(`Error generating swagger. ${err}`);
});
function getPackageJsonValue(key) {
    try {
        const projectPackageJson = require(`${workingDir}/package.json`);
        return projectPackageJson[key] || '';
    }
    catch (err) {
        return '';
    }
}
function getConfig(configPath = 'swagger.json') {
    try {
        return require(`${workingDir}/${configPath}`);
    }
    catch (err) {
        if (err.code === 'MODULE_NOT_FOUND') {
            throw Error(`No config file found at '${configPath}'`);
        }
        else if (err.name === 'SyntaxError') {
            throw Error(`Invalid JSON syntax in config at '${configPath}': ${err.message}`);
        }
        else {
            throw Error(`Unhandled error encountered loading '${configPath}': ${err.message}`);
        }
    }
}
function validateSwaggerConfig(conf) {
    if (!conf.outputDirectory) {
        throw new Error('Missing outputDirectory: onfiguration most contain output directory');
    }
    if (!conf.entryFile) {
        throw new Error('Missing entryFile: Configuration must contain an entry point file.');
    }
    conf.version = conf.version || versionDefault;
    conf.name = conf.name || nameDefault;
    conf.description = conf.description || descriptionDefault;
    conf.license = conf.license || licenseDefault;
    conf.yaml = conf.yaml === false ? false : true;
    return conf;
}
function getCompilerOptions(loadTsconfig, tsconfigPath) {
    if (!loadTsconfig && tsconfigPath) {
        loadTsconfig = true;
    }
    if (!loadTsconfig) {
        return {};
    }
    const cwd = process.cwd();
    const defaultTsconfigPath = path_1.join(cwd, 'tsconfig.json');
    tsconfigPath = tsconfigPath
        ? getAbsolutePath(tsconfigPath, cwd)
        : defaultTsconfigPath;
    try {
        const tsConfig = require(tsconfigPath);
        if (!tsConfig) {
            throw new Error('Invalid tsconfig');
        }
        return tsConfig.compilerOptions || {};
    }
    catch (err) {
        if (err.code === 'MODULE_NOT_FOUND') {
            throw Error(`No tsconfig file found at '${tsconfigPath}'`);
        }
        else if (err.name === 'SyntaxError') {
            throw Error(`Invalid JSON syntax in tsconfig at '${tsconfigPath}': ${err.message}`);
        }
        else {
            throw Error(`Unhandled error encountered loading tsconfig '${tsconfigPath}': ${err.message}`);
        }
    }
}
function getAbsolutePath(path, basePath) {
    if (path_1.isAbsolute(path)) {
        return path;
    }
    else {
        return path_1.join(basePath, path);
    }
}
