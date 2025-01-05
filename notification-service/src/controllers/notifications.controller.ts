import { Controller } from '@nestjs/common';
import { OrdersService } from 'src/services/orders.service';

@Controller('notifications')
export class NotificationsController {
    constructor(private readonly ordersService: OrdersService) { }
}
