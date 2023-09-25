import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get('/')
  public main(): string {
    return 'OK';
  }

  @Get('/hello')
  public getHello(): string {
    return this.appService.getHello();
  }
}
