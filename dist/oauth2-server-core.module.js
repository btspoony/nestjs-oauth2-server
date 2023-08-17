var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OAuth2ServerCoreModule_1;
import { Module, Global, } from '@nestjs/common';
import OAuth2Server from 'oauth2-server';
import { OAuth2ServerTokenGuard, OAuth2ServerAuthorizationGuard, OAuth2ServerAuthenticationGuard, } from './guards/index.js';
import { OAUTH2_SERVER, OAUTH2_SERVER_MODEL_PROVIDER, OAUTH2_SERVER_OPTIONS_TOKEN, } from './oauth2-server.constants.js';
import { ModelProviderModule } from './model-provider.module.js';
export let OAuth2ServerCoreModule = OAuth2ServerCoreModule_1 = class OAuth2ServerCoreModule {
    static forRoot(options) {
        return {
            module: OAuth2ServerCoreModule_1,
            providers: [
                {
                    provide: OAUTH2_SERVER_OPTIONS_TOKEN,
                    useValue: options,
                },
            ],
        };
    }
    static forRootAsync(options) {
        return {
            module: OAuth2ServerCoreModule_1,
            providers: [...this.createAsyncProviders(options)],
            imports: options.imports || [],
        };
    }
    static createAsyncProviders(options) {
        if (options.useFactory || options.useExisting) {
            return [this.createAsyncOptionsProvider(options)];
        }
        const useClass = options.useClass;
        return [this.createAsyncOptionsProvider(options), useClass];
    }
    static createAsyncOptionsProvider(options) {
        if (options.useFactory) {
            return {
                provide: OAUTH2_SERVER_OPTIONS_TOKEN,
                useFactory: options.useFactory,
                inject: options.inject || [],
            };
        }
        const inject = [
            (options.useClass ||
                options.useExisting),
        ];
        return {
            provide: OAUTH2_SERVER_OPTIONS_TOKEN,
            useFactory: (factory) => factory.createOAuth2ServerOptions(),
            inject,
        };
    }
};
OAuth2ServerCoreModule = OAuth2ServerCoreModule_1 = __decorate([
    Global(),
    Module({
        imports: [ModelProviderModule],
        providers: [
            {
                provide: OAUTH2_SERVER_OPTIONS_TOKEN,
                useValue: {},
            },
            {
                provide: OAUTH2_SERVER,
                useFactory: (options, model) => new OAuth2Server(Object.assign({}, options, { model })),
                inject: [
                    OAUTH2_SERVER_OPTIONS_TOKEN,
                    OAUTH2_SERVER_MODEL_PROVIDER,
                ],
            },
            OAuth2ServerTokenGuard,
            OAuth2ServerAuthorizationGuard,
            OAuth2ServerAuthenticationGuard,
        ],
        exports: [OAUTH2_SERVER],
    })
], OAuth2ServerCoreModule);
