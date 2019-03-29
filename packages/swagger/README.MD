 
# Swagger for Nest

### Quick start

- install
```bash
npm install nest-swagger
```

- add swagger.config.json
``` bash
    {
        "swagger": {
            "outputDirectory": "./dist",
            "entryFile": "./src/main.ts",
            "name": "your app name",
            "description": "description",
            "license": "MIT",
            "produces": ["application/json"],
            "version": "0.0.1"
        }
    }
```
- add npm script
```
    "swagger": "swaggerGen -c ./swagger.config.json",
```
- run npm script 
```
    npm run swagger
```
you can find the output generated `swagger.json` and `swagger.yaml`

### examples project

https://github.com/vellengs/nestx-server