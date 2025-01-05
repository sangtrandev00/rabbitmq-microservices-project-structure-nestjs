import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy, MessagePattern } from "@nestjs/microservices";
import { InjectRepository } from "@nestjs/typeorm";
import { Notification } from "src/entities/notification.entity";
import { Repository } from "typeorm";

@Injectable()
export class OrdersService {

    constructor(
        @InjectRepository(Notification) private readonly notificationRepository: Repository<Notification>,
        @Inject('RABBITMQ_CLIENT') private readonly rabbitClient: ClientProxy,
    ) { }

    @MessagePattern(['order_created', 'payment_completed'])
    async handleNotification(event: any) {
        console.log('Sending notification for event:', event);
        // Logic gửi thông báo qua email/SMS
    }

}