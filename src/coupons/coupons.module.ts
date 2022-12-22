import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CouponsController } from './coupons.controller';
import { CouponsService } from './coupons.service';
import { Coupons, CouponsSchema } from './schemas/coupons.schema';

@Module({
  providers: [CouponsService],
  controllers: [CouponsController],
  imports: [
    MongooseModule.forFeature([
      {
        name: Coupons.name,
        schema: CouponsSchema,
      },
    ]),
  ],
})
export class CouponsModule {}
