import { HttpService } from '@nestjs/axios';
import { Injectable, } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class GatewayService {
    private readonly orderServiceUrl: string;

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) {
        this.orderServiceUrl = this.configService.get<string>('ORDER_SERVICE_URL');
    }
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