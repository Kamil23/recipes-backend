import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ICouponsResponse } from '../types/ICouponsResponse';

export type CouponsDocument = Coupons & Document;

@Schema()
export class Coupons implements ICouponsResponse {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  couponUrl: string;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  discount: number;
}

export const CouponsSchema = SchemaFactory.createForClass(Coupons);
