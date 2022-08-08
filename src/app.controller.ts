import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get('/')
  public getHello(): Record<'hello', string> {
    return {
      hello: this.appService.getHello(),
    };
  }
}
