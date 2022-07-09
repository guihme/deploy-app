"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(bodyParser.json());
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Scheduling')
        .setDescription('The Scheduling API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, document);
    await app.listen(process.env.APP_PORT);
    console.log(`Listening on https://localhost:${process.env.PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map