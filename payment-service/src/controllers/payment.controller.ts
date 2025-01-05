import { Controller } from '@nestjs/common';
import { PaymentService } from 'src/services/payment.service';

@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) { }

}
