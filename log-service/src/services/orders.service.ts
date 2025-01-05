import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy, MessagePattern } from "@nestjs/microservices";
import { InjectRepository } from "@nestjs/typeorm";
import { Log } from "src/entities/log.entity";
import { Repository } from "typeorm";

@Injectable()
export class OrdersService {

    constructor(
        @InjectRepository(Log) private readonly logRepository: Repository<Log>,
        @Inject('RABBITMQ_CLIENT') private readonly rabbitClient: ClientProxy,
    ) { }

}