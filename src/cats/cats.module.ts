/*
 * @Author: Lyq 
 * @Date: 2024-02-27 21:04:43
 * @LastEditors: Lyq 
 * @LastEditTime: 2024-02-27 21:08:14
 */
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule { }