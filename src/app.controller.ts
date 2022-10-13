import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseSchema, Response } from './common/schemas/response.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  healthCheck(): Response {
    return this.appService.healthCheck();
  }

  /** --------------------------*/

  @Get('/orlenValues/')
  async getOrlenValues(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    try {
      const items = await this.appService.getOrlenValues(startDate, endDate);
      return new ResponseSchema(200, 'ok', {
        count: items.length,
        data: items,
      });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Get('/marketValues/')
  async getMarketValues(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    try {
      const items = await this.appService.getMarketValues(startDate, endDate);
      return new ResponseSchema(200, 'ok', {
        count: items.length,
        data: items,
      });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
