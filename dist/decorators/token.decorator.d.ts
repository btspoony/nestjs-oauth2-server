import { AuthorizeOptions } from 'oauth2-server';
export declare const OAuth2RenewToken: (options?: AuthorizeOptions) => ClassDecorator & MethodDecorator;
export declare const OAuth2Token: (...dataOrPipes: unknown[]) => ParameterDecorator;
