import { Controller } from '@nestjs/common';
import { NotificationsService } from 'src/services/notifications.service';

@Controller('notifications')
export class NotificationsController {
    constructor(private readonly notificationsService: NotificationsService) { }
}
