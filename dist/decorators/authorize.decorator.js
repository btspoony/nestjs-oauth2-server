import { UseGuards, SetMetadata, applyDecorators, createParamDecorator, } from '@nestjs/common';
import { OAuth2ServerAuthorizationGuard } from '../guards/index.js';
import { OAUTH2_METHOD_OPTIONS_METADATA } from '../oauth2-server.constants.js';
export const OAuth2Authorize = (options) => applyDecorators(SetMetadata(OAUTH2_METHOD_OPTIONS_METADATA, options), UseGuards(OAuth2ServerAuthorizationGuard));
export const OAuth2Authorization = createParamDecorator((_, context) => { var _a; return (_a = context.switchToHttp().getRequest().oauth) === null || _a === void 0 ? void 0 : _a.authorization; });
