import { Controller } from '@nestjs/common';
import { OrdersService } from 'src/services/orders.service';

@Controller('logs')
export class LogsController {
    constructor(private readonly ordersService: OrdersService) { }
}
