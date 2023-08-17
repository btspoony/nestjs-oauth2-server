import { AuthorizeOptions } from 'oauth2-server';
export declare const OAuth2Authorize: (options?: AuthorizeOptions) => ClassDecorator & MethodDecorator;
export declare const OAuth2Authorization: (...dataOrPipes: unknown[]) => ParameterDecorator;
