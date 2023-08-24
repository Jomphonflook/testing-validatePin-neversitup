import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:number')
  getHello(
    @Param('number') input : string
  ): string {
    const pin = input
    return this.appService.validatePin(pin);
  }
}
