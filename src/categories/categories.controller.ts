import { BadRequestException, Controller, Get } from '@nestjs/common';
import { ResponseSchema } from 'src/common/schemas/response.schema';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

  @Get()
  async index() {
    try {
      const categoriesData = await this.service.getCategories();
      return new ResponseSchema(200, 'OK', categoriesData);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
