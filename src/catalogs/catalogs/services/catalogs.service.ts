/**
 * @fileoverview The CatalogsService class in TypeScript is an Injectable service that retrieves static catalog data
from various Prisma services. */
import { Injectable } from '@nestjs/common';

import { CitiesPrismaService } from '@/catalogs/cities';
import { baseResponse, handlerException } from '@/config';

@Injectable()
export class CatalogsService {
  constructor(private readonly citiesPrismaService: CitiesPrismaService) {}

  /**
   * The function `staticCatalog` asynchronously fetches data from multiple Prisma services and returns
   * a response with the fetched data.
   * @returns The `staticCatalog` method is returning a base response object that contains data from
   * various catalog methods. The data includes modules, permissions, roles, states, typeTest, and
   * typesModule. If an error occurs during the execution of any of the catalog methods, the method will
   * catch the error and return an exception handler response.
   */
  async staticCatalog() {
    try {
      const cities = await this.citiesPrismaService.catalog();

      return baseResponse({
        data: {
          cities,
        },
      });
    } catch (error) {
      return handlerException(error);
    }
  }
}
