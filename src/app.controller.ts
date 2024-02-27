/*
 * @Author: Lyq 
 * @Date: 2024-02-27 20:19:10
 * @LastEditors: Lyq 
 * @LastEditTime: 2024-02-27 21:38:34
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // 依赖注入 不需要new AppService()，而是通过构造函数注入
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello2();
  }
}
