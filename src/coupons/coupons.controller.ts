import { BadRequestException, Controller, Get } from '@nestjs/common';
import { ResponseSchema } from 'src/common/schemas/response.schema';
import { CouponsService } from './coupons.service';

@Controller('coupons')
export class CouponsController {
  constructor(private readonly service: CouponsService) {}

  @Get()
  async index() {
    try {
      const categoriesData = await this.service.getCoupons();
      return new ResponseSchema(200, 'OK', categoriesData);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
