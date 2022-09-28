import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getJSON(): object {
    return {
      code: 200,
      status: 'OK',
      data: [
        {
          id: 1,
          title: 'Beza malinowa',
          ingredients: '',
        },
      ],
    };
  }
}
