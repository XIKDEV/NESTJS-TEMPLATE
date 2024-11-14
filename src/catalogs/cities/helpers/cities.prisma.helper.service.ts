import { Injectable } from '@nestjs/common';

import { ICatalogsAttributes } from '@/config';

@Injectable()
export class CitiesPrismaService {
  catalog(): Array<ICatalogsAttributes> {
    return [
      {
        value: 1,
        label: 'Tijuana',
      },
    ];
  }
}
