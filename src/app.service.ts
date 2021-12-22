import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postUser() {
    return 'User created!'
  }

  getUsers() {
    return 'All users!'
  }

  getReceipts() {
    return 'All receipts!'
  }

  postPayment() {
    this.addToPaymentQueue()
    return 'Post payment!'
  }

  private addToPaymentQueue() {
    console.log('Added to the queue!')
  }
}
