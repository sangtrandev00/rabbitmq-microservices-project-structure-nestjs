import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrderDto } from 'src/dtos/create-order.dto';
import { OrdersService } from 'src/services/orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) { }

    @Post()
    createOrder(@Body() createOrderDto: CreateOrderDto) {
        console.log("create order dto", createOrderDto);

        return this.ordersService.createOrder(createOrderDto);
    }
}
