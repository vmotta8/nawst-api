import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/user')
  postUser(): string {
    return this.appService.postUser();
  }

  @Get('/user')
  getUsers(): string {
    return this.appService.getUsers();
  }

  @Get('/receipts')
  getReceipts(): string {
    return this.appService.getReceipts();
  }

  @Post('/payment')
  postPayment(): string {
    return this.appService.postPayment();
  }
}
