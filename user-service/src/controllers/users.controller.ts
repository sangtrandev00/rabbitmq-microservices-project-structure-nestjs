import { Controller } from '@nestjs/common';
import { UserService } from 'src/services/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UserService) { }

}
