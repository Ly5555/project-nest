/*
 * @Author: Lyq
 * @Date: 2024-02-27 20:19:10
 * @LastEditors: Lyq 
 * @LastEditTime: 2024-02-27 21:35:53
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CatsModule } from './cats/cats.module';
import { UserModule } from './user/user.module';

// 应用程序的根模块
@Module({
  imports: [CatsModule, UserModule],
  controllers: [AppController],//类似路由
  providers: [AppService],
})
export class AppModule { }
/**
 * app.module.ts 是根模块，它用来汇集应用中的其他模块
 * app.controller.ts 常见功能用来处理http请求以及调用service层等处理方法
 * app.service.ts 封装通用的业务逻辑、与数据层的交互（数据库）、其他额外的一些三方请求
 * 
 * 
 */