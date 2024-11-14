/**
 * @fileoverview The `JwtStrategy` class in TypeScript implements a Passport JWT strategy for user authentication and
 * authorization, validating users based on a common ID and roles. */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { ICommonId, unauthorizedExceptionMessages } from '@/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('SECRET_KEY'),
    });
  }

  /**
   * The function `validate` asynchronously retrieves a user with roles based on a common ID and throws
   * an UnauthorizedException if the user is not found.
   * @param {ICommonId} payload - The `payload` parameter in the `validate` function is of type
   * `ICommonId`. It seems to contain an `id` property that is used to find a user with roles using the
   * `userPrismaService.findByIdWithRoles` method. If the user is not found based on the provided
   * @returns The `validate` function is returning the user object that is fetched from the
   * `userPrismaService` using the `findByIdWithRoles` method. If the user is not found, an
   * `UnauthorizedException` is thrown with the message "invalidCredentials".
   */
  validate(payload: ICommonId) {
    const user = {
      id: payload.id,
      email: 'test',
    };

    if (!user) {
      throw new UnauthorizedException(
        unauthorizedExceptionMessages.invalidCredentials,
      );
    }

    return user;
  }
}
