import { Token, OAuthError, AuthorizationCode, Request as OAuth2Request, Response as OAuth2Response } from 'oauth2-server';
import OAuth2Server from 'oauth2-server';
import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
export declare abstract class BaseGuard {
    protected readonly reflector: Reflector;
    protected readonly oauthServer: OAuth2Server;
    canActivate(context: ExecutionContext): Observable<boolean>;
    protected getRequest<T>(context: ExecutionContext): T;
    protected getResponse<T>(context: ExecutionContext): T;
    private getOptions;
    protected throwError(error: OAuthError): Observable<never>;
    protected abstract action(request: OAuth2Request, response: OAuth2Response, options?: Parameters<OAuth2Server[keyof OAuth2Server]>[2]): Observable<Token | AuthorizationCode>;
    protected abstract includeOauthInRequest<T extends Record<string, any>>(request: T, tokenOrAuthorizationCode: Token | AuthorizationCode): void;
}
