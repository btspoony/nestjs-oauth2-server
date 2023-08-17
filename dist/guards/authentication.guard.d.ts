import { Token, AuthenticateOptions, Request as OAuth2Request, Response as OAuth2Response } from 'oauth2-server';
import { Observable } from 'rxjs';
import { CanActivate } from '@nestjs/common';
import { BaseGuard } from './base.guard.js';
export declare class OAuth2ServerAuthenticationGuard extends BaseGuard implements CanActivate {
    protected action(request: OAuth2Request, response: OAuth2Response, options?: AuthenticateOptions): Observable<Token>;
    protected includeOauthInRequest(request: Record<string, any>, token: Token): void;
}
