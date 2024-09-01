import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Queue } from "bull";
import { InjectQueue } from "@nestjs/bull";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(){

    return this.appService.getHello();
  }
}
