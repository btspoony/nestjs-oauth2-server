import { UseGuards, SetMetadata, applyDecorators, } from '@nestjs/common';
import { OAuth2ServerAuthenticationGuard } from '../guards/index.js';
import { OAUTH2_METHOD_OPTIONS_METADATA } from '../oauth2-server.constants.js';
export const OAuth2Authenticate = (options = {}) => applyDecorators(SetMetadata(OAUTH2_METHOD_OPTIONS_METADATA, options), UseGuards(OAuth2ServerAuthenticationGuard));
