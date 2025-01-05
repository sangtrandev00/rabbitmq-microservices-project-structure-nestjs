import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Order } from "../entities/order.entity";
import { CreateOrderDto } from "src/dtos/create-order.dto";

@Injectable()
export class OrdersService {

    constructor(
        @InjectRepository(Order) private readonly orderRepository: Repository<Order>,
        @Inject('RABBITMQ_CLIENT') private readonly rabbitClient: ClientProxy,
    ) { }

    async createOrder(createOrderDto: CreateOrderDto) {
        const order = this.orderRepository.create(createOrderDto);
        await this.orderRepository.save(order);

        // Gửi message đến RabbitMQ
        this.rabbitClient.emit('order_created', { orderId: order.id, ...order });
        return order;
    }

}