import { applyDecorators, Scope, SetMetadata } from '@nestjs/common';

import { OAUTH2_SERVER_MODEL } from '../oauth2-server.constants.js';

export const OAuth2Model = (): ClassDecorator =>
    applyDecorators(
        SetMetadata('scope:options', { scope: Scope.DEFAULT }),
        SetMetadata(OAUTH2_SERVER_MODEL, {}),
    );
