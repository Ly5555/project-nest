/*
 * @Author: Lyq 
 * @Date: 2024-02-27 20:31:30
 * @LastEditors: Lyq 
 * @LastEditTime: 2024-02-27 20:58:24
 */
import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express'
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) { }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
