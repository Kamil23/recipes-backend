import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './schemas/user.schema';
import { IUser } from './types/IUser';
import { RegisterBodyDto } from './types/requests/RegisterBody.dto';
import { v4 as uuidv4 } from 'uuid';
import { LoginBodyDto } from './types/requests/LoginBody.dto';
import { IUserResponse } from './types/responses/IUserResponse';
import * as jwt from 'jsonwebtoken';

export interface IUserResponseToken extends IUserResponse {
  token: string;
}

export interface ITokenData {
  user_uuid: string;
  email: string;
}

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async register(body: RegisterBodyDto): Promise<IUser> {
    const newUser = new this.userModel({
      user_uuid: uuidv4(),
      ...body,
      created_at: new Date(),
      user_details: {},
    });

    return await newUser.save();
  }

  async login(body: LoginBodyDto): Promise<IUserResponseToken> {
    // find user
    const user = await this.userModel.findOne({
      email: { $eq: body.email },
      password: { $eq: body.password },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    debugger;
    console.log('user: ', user);

    // create token
    const token = jwt.sign(
      {
        user_uuid: user.user_uuid,
        email: user.email,
      } as ITokenData,
      process.env.JWT_SECRET || ' ',
      { expiresIn: '1h' },
    );

    console.log('jwt_secret: ', process.env.JWT_SECRET);
    console.log('token: ', token);

    const { user_uuid, email, user_details } = user;
    return {
      user_uuid,
      email,
      userDetails: user_details,
      name: user_details?.first_name ?? '',
      token,
    };
  }
}
