var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Reflector, DiscoveryModule, DiscoveryService, } from '@nestjs/core';
import { defer, firstValueFrom, of, throwError } from 'rxjs';
import { InternalServerErrorException, Module, } from '@nestjs/common';
import { OAUTH2_SERVER_MODEL, OAUTH2_SERVER_MODEL_PROVIDER, } from './oauth2-server.constants.js';
import { mergeMap } from 'rxjs/operators';
const NO_MODEL_EXCEPTION = 'OAuth2Model not provided';
export let ModelProviderModule = class ModelProviderModule {
};
ModelProviderModule = __decorate([
    Module({
        imports: [DiscoveryModule],
        providers: [
            {
                provide: OAUTH2_SERVER_MODEL_PROVIDER,
                useFactory: (discoverService, reflector) => {
                    const getProvider = () => __awaiter(void 0, void 0, void 0, function* () {
                        const service = discoverService
                            .getProviders()
                            .find(provider => provider.metatype &&
                            reflector.get(OAUTH2_SERVER_MODEL, provider.metatype));
                        return service === null || service === void 0 ? void 0 : service.instance;
                    });
                    return firstValueFrom(defer(() => getProvider()).pipe(mergeMap(instance => instance
                        ? of(instance)
                        : throwError(() => new InternalServerErrorException(NO_MODEL_EXCEPTION)))));
                },
                inject: [DiscoveryService, Reflector],
            },
        ],
        exports: [OAUTH2_SERVER_MODEL_PROVIDER],
    })
], ModelProviderModule);
