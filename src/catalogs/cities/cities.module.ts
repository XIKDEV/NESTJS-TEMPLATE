import { Module } from '@nestjs/common';

import { CitiesPrismaService } from './helpers';

@Module({
  exports: [CitiesPrismaService],
  providers: [CitiesPrismaService],
})
export class CitiesModule {}
