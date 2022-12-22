import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Categories, CategoriesDocument } from './schemas/categories.schema';
import { Model } from 'mongoose';
// import { ICategoriesResponse } from './types/ICategoriesResponse';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Categories.name)
    private readonly model: Model<CategoriesDocument>,
  ) {}

  async getCategories(): Promise<any> {
    const categories = await this.model.find().exec();
    if (!categories) {
      throw new BadRequestException('categories not found!');
    }
    return categories;
  }
}
