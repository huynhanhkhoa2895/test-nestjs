import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { GRPC_PACKAGE } from "./constants";
import { join } from "path";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: 'localhost:5010',
      package: GRPC_PACKAGE.BLOCKCHAIN_PACKAGE.name,
      protoPath: join(__dirname, `../test.proto`),
      loader: {
        keepCase: true,
      },
    },
  });
  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
