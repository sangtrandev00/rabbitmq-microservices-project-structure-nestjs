import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy, MessagePattern } from "@nestjs/microservices";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Payment } from "../entities/payment.entity";

@Injectable()
export class PaymentService {

    constructor(
        @InjectRepository(Payment) private readonly paymentRepository: Repository<Payment>,
        @Inject('RABBITMQ_CLIENT') private readonly rabbitClient: ClientProxy,
    ) { }

    @MessagePattern('order_created')
    async handleOrderCreated(orderData: any) {
        console.log('Processing payment for order:', orderData);

        // Xử lý logic thanh toán
        const isSuccess = Math.random() > 0.2; // Random kết quả (success/fail)

        const paymentStatus = isSuccess ? 'payment_completed' : 'payment_failed';
        this.rabbitClient.emit(paymentStatus, { orderId: orderData.orderId });
    }

}