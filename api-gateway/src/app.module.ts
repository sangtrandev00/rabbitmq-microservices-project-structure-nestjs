import { Module } from '@nestjs/common';
import { GatewayController } from './controllers/gateway.controller';
import { GatewayService } from './services/gateway.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes configuration available globally
    }),
    HttpModule, // Enables HTTP requests to microservices
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class AppModule { }
