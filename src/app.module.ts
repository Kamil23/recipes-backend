import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from './categories/categories.module';
import { CouponsModule } from './coupons/coupons.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'recipesDB',
    }),
    CategoriesModule,
    CouponsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
