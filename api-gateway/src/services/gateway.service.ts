import { HttpService } from '@nestjs/axios';
import { Injectable, } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class GatewayService {
    private readonly orderServiceUrl = process.env.ORDER_SERVICE_URL || 'http://order-service:4001';

    constructor(private readonly httpService: HttpService) { }

    async createOrder(createOrderDto: any) {
        const response = await lastValueFrom(this.httpService.post(
            `${this.orderServiceUrl}/orders`,
            createOrderDto,
        ));
        return response.data;
    }

    async getOrder(id: string) {
        const response = await lastValueFrom(this.httpService.get(`${this.orderServiceUrl}/orders/${id}`));
        return response.data;
    }
}