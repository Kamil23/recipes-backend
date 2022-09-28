import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ICategoriesResponse } from '../types/ICategoriesResponse';

export type CategoriesDocument = Categories & Document;

@Schema()
export class Categories implements ICategoriesResponse {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  categoryId: number;
}

export const CategoriesSchema = SchemaFactory.createForClass(Categories);
