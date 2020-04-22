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
  const axiosDist = path.resolve(
    current,
    './../../clients/nest-react/src/generated',
  );
  await generate('typescript-axios', axiosDist);
  const testingFolder = path.resolve(current, './../nest-testing/generated');
  shell.rm('-rf', testingFolder);
  shell.cp('-R', axiosDist, testingFolder);
  const from = path.resolve(current, 'src/swagger', 'swagger.json');
  shell.cp(from, testingFolder);
}

async function generateAngular() {
  const angularDist = path.resolve(
    process.cwd(),
    './../../clients/nest-angular/src/generated',
  );
  await generate('typescript-angular', angularDist, { ngVersion: '6.0' });
}

async function generateJavaSpringBoot() {
  const springBootDist = path.resolve(process.cwd(), './../nest-spring');
  await generate('spring', springBootDist, null);
}

async function generateAll() {
  await generateAngular();
  await generateAxios();
  await generateJavaSpringBoot();
}

generateAll().then(() => {
  console.log('generated');
});
