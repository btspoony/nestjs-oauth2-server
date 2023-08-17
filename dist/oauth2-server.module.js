var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OAuth2ServerModule_1;
import { Module } from '@nestjs/common';
import { OAuth2ServerCoreModule } from './oauth2-server-core.module.js';
export let OAuth2ServerModule = OAuth2ServerModule_1 = class OAuth2ServerModule {
    static forRoot(options) {
        return {
            module: OAuth2ServerModule_1,
            imports: [OAuth2ServerCoreModule.forRoot(options)],
        };
    }
    static forRootAsync(options) {
        return {
            module: OAuth2ServerModule_1,
            imports: [OAuth2ServerCoreModule.forRootAsync(options)],
        };
    }
};
OAuth2ServerModule = OAuth2ServerModule_1 = __decorate([
    Module({
        imports: [OAuth2ServerCoreModule],
    })
], OAuth2ServerModule);
