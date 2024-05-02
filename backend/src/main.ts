import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';


async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: '*',
        methods: 'GET, PUT, POST, DELETE',
        allowedHeaders: 'Content-Type, Authorization'
    });
    app.use((res, req, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Origin', 'Content-Type, Accept');
        next();
    });
    await app.listen(process.env.PORT || 3000, () => {
        console.log(`Running on ${process.env.PORT || 3000}`);
    });
}

bootstrap();