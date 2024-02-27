/*
 * @Author: Lyq 
 * @Date: 2024-02-27 20:19:10
 * @LastEditors: Lyq 
 * @LastEditTime: 2024-02-27 21:38:53
 */
import { Injectable } from '@nestjs/common';
import { get } from 'http';

// 单一的方法等基本服务 
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! 2222';
  }
  getHello2(): string {
    return 'Hello World! 3333';
  }
}
