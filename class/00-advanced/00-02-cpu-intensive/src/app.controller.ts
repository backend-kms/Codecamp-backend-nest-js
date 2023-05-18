// app.controller.ts

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, //
  ) {}

  // 싱글 스레드로 인해 /qqq가 블락되면 /qqq2도 블락
  // 자바스크립트의 해결 -> 워커스레드
  @Get('/qqq')
  getHello(): string {
    let sum = 0;
    for (let i = 0; i <= 9000000000; i++) {
      sum += i;
    }

    return '철수 성공!!';
  }

  @Get('/qqq2')
  getHello2(): string {
    return '영희 성공!!';
  }
}
