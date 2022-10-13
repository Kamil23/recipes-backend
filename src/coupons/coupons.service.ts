import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Coupons, CouponsDocument } from './schemas/coupons.schema';

@Injectable()
export class CouponsService {
  constructor(
    @InjectModel(Coupons.name)
    private readonly model: Model<CouponsDocument>,
  ) {}

  async getCoupons(): Promise<any> {
    const coupons = await this.model.find().exec();
    if (!coupons) {
      throw new BadRequestException('coupons not found!');
    }
    return coupons;
  }
}
