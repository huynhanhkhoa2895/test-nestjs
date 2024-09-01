import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { TestProcessor } from "./test.processor";
import { AudioController } from "./audio.controller";
@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'audio',
    })
  ],
  controllers: [AudioController],
  providers: [TestProcessor],
})
export class AudioModule {}
