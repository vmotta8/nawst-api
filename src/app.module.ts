// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConfig } from './config';
import { ProductsModule } from './modules/products/products.module';

const DatabaseModule = SequelizeModule.forRoot({
  ...DatabaseConfig,
  autoLoadModels: true,
  synchronize: true,
  logging: false,
});

@Module({
  imports: [DatabaseModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
