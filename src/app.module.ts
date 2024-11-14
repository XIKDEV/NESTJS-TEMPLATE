import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CatalogsModule } from './catalogs';
import { AuthModule, FirebaseModule, NodemailerModule } from './providers';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    AuthModule,
    CatalogsModule,
    NodemailerModule,
    FirebaseModule,
  ],
})
export class AppModule {}
