import { DynamicModule } from '@nestjs/common';
import { IOAuth2ServerModuleOptions, IOAuth2ServerModuleAsyncOptions } from './interfaces/index.js';
export declare class OAuth2ServerModule {
    static forRoot(options: IOAuth2ServerModuleOptions): DynamicModule;
    static forRootAsync(options: IOAuth2ServerModuleAsyncOptions): DynamicModule;
}
