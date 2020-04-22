import * as path from 'path';
import * as shell from 'shelljs';

async function generate(
  name: string,
  dist: string,
  options?: { [key: string]: any },
) {
  try {
    const current = process.cwd();
    const swaggerPath = path.resolve(current, 'src/swagger', 'swagger.json');
    let additionalProperties = '';
    if (options) {
      const items: string[] = [];
      for (const key in options) {
        items.push(`${key}=` + options[key]);
      }
      additionalProperties = '--additional-properties=' + items.join(',');
    } 
    shell.exec(
      `node_modules/.bin/openapi-generator generate -i ${swaggerPath} -g ${name} -o ${dist} --skip-validate-spec ${additionalProperties}`,
    );
  } catch (ex) {
    console.log('ex...:', ex);
  }
}

async function generateAxios() {
  const current = process.cwd();
  const axiosDist = path.resolve(current, './generated');
  shell.rm('-rf', axiosDist);
  await generate('typescript-axios', axiosDist);
}

async function generateAll() {
  await generateAxios();
}

generateAll().then(() => {
  console.log('generated');
});
