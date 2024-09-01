import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Queue } from "bull";
import { InjectQueue } from "@nestjs/bull";
import { GRPC_PACKAGE } from "./constants";
import { GrpcMethod } from "@nestjs/microservices";

@Controller('audio')
export class AudioController {
  constructor(@InjectQueue('audio') private audioQueue: Queue) {}

  @GrpcMethod(GRPC_PACKAGE.BLOCKCHAIN_PACKAGE.service, 'Test')
  async getHello(){
    console.log('audio getHello');
    const job = await this.audioQueue.add({
      foo: 'bar',
    });


  }
}
