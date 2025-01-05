import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Order } from "../entities/order.entity";
import { CreateOrderDto } from "src/dtos/create-order.dto";
import { Logger } from "@nestjs/common";

@Injectable()
export class OrdersService {

    constructor(
        @InjectRepository(Order) private readonly orderRepository: Repository<Order>,
        @Inject('RABBITMQ_CLIENT') private readonly rabbitClient: ClientProxy,
        private readonly logger: Logger
    ) { }

    async createOrder(createOrderDto: CreateOrderDto) {
        const order = this.orderRepository.create(createOrderDto);
        await this.orderRepository.save(order);
        // Log the order creation
        this.logger.log(`Order created: ${JSON.stringify(order)}`);

        // Emit message to RabbitMQ
        this.rabbitClient.emit('order_created', { orderId: order.id, ...order });
        this.logger.log(`Emitted order_created event for orderId: ${order.id}`);

        return order;
    }

}