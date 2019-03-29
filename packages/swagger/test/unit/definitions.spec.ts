import 'mocha';
import { MetadataGenerator } from '../../src/metadata/metadataGenerator';
import { SpecGenerator } from './../../src/swagger/generator';
import { SwaggerConfig } from './../../src/swagger/config';

async function generateNest() {
  const compilerOptions = {
    baseUrl: '.',
    paths: {
      '@/*': ['test/nestjs/*']
    }
  };

  const swaggerConfig: SwaggerConfig = require('./../data/swagger.json');
  const metadata = new MetadataGenerator(
    swaggerConfig.entryFile,
    compilerOptions
  ).generate();
  new SpecGenerator(metadata, swaggerConfig)
    .generate(swaggerConfig.outputDirectory, swaggerConfig.yaml)
    .then(() => {
      console.info('Generation completed.');
    })
    .catch((err: any) => {
      console.error(`Error generating swagger. ${err}`);
    });
}

describe('Definition generation', async () => {
  await generateNest();
});
