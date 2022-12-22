import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginBodyDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
