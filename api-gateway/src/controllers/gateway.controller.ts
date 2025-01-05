import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { GatewayService } from "src/services/gateway.service";

@Controller('gateway')
export class GatewayController {
    constructor(private readonly gatewayService: GatewayService) { }

    @Post()
    async createOrder(@Body() createOrderDto: any) {
        return this.gatewayService.createOrder(createOrderDto);
    }

    @Get(':id')
    async getOrder(@Param('id') id: string) {
        return this.gatewayService.getOrder(id);
    }
}   