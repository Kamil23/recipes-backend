import { IsNotEmpty } from '@nestjs/class-validator';

export class BaseCategoriesDto {
  name: string;

  @IsNotEmpty()
  categoryId: number;
}
