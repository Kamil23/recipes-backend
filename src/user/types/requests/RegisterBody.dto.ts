import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterBodyDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
