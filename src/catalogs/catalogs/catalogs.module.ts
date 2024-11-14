import { Module } from '@nestjs/common';

import { CitiesModule } from '../cities';
import { CatalogsController } from './controllers';
import { CatalogsService } from './services';

@Module({
  controllers: [CatalogsController],
  providers: [CatalogsService],
  imports: [CitiesModule],
})
export class CatalogsModule {}
