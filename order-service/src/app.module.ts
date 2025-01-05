import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Order } from './entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './services/orders.service';

@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Change to -> Docker service name if use docker container ==> Default using localhost
      port: 5432,
      username: 'admin',
      password: 'password',
      database: 'mydb',
      entities: [Order],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Order]), // Register the Order entity
    ClientsModule.register([
      {
        name: 'RABBITMQ_CLIENT',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://user:password@localhost:5672'],
          queue: 'order_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),

  ],
  controllers: [AppController, OrdersController],
  providers: [AppService, OrdersService, Logger],
})
export class AppModule { }
