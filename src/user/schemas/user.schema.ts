import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IUser } from '../types/IUser';
import { IUserDetails } from '../types/IUserDetails';

export type UserDocument = User & Document;

@Schema({ _id: false })
export class UserDetails implements IUserDetails {
  @Prop()
  first_name?: string;

  @Prop()
  last_name?: string;

  @Prop()
  address?: string;

  @Prop()
  zip_code?: string;

  @Prop()
  city?: string;

  @Prop()
  country?: string;

  @Prop()
  phone?: string;

  @Prop()
  subscription_type?: string;

  _id?: string;
}

export const UserDetailsSchema = SchemaFactory.createForClass(UserDetails);

@Schema({ minimize: false })
export class User implements IUser {
  @Prop({
    unique: true,
    required: true,
  })
  user_uuid: string;

  @Prop({
    unique: true,
    required: true,
  })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: {} })
  user_details?: UserDetails;

  @Prop({ required: true })
  created_at: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
