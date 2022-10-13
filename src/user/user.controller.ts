import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { ResponseSchema } from 'src/common/schemas/response.schema';
import { LoginBodyDto } from './types/requests/LoginBody.dto';
import { RegisterBodyDto } from './types/requests/RegisterBody.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() body: RegisterBodyDto) {
    try {
      const user = await this.userService.register(body);
      return new ResponseSchema(201, 'created', user);
    } catch (error) {
      throw new BadRequestException(new ResponseSchema(400, 'error', error));
    }
  }

  @Post('login')
  async login(@Body() body: LoginBodyDto) {
    try {
      console.log('body: ', body);
      const user = await this.userService.login(body);
      return new ResponseSchema(201, 'created', user);
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
