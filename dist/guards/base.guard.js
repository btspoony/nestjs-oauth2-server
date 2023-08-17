var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Request as OAuth2Request, Response as OAuth2Response, } from 'oauth2-server';
import OAuth2Server from 'oauth2-server';
import { Inject, Injectable, HttpException, } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { of, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { OAUTH2_SERVER, OAUTH2_METHOD_OPTIONS_METADATA, } from '../oauth2-server.constants.js';
export let BaseGuard = class BaseGuard {
    canActivate(context) {
        const request = this.getRequest(context);
        return this.action(new OAuth2Request(request), new OAuth2Response(this.getResponse(context)), this.getOptions(context)).pipe(catchError((error) => this.throwError(error)), mergeMap((tokenOrAuthorizationCode) => {
            this.includeOauthInRequest(request, tokenOrAuthorizationCode);
            return of(true);
        }));
    }
    getRequest(context) {
        return context.switchToHttp().getRequest();
    }
    getResponse(context) {
        return context.switchToHttp().getResponse();
    }
    getOptions(context) {
        return this.reflector.get(OAUTH2_METHOD_OPTIONS_METADATA, context.getHandler());
    }
    throwError(error) {
        return throwError(new HttpException(error.message, error.code));
    }
};
__decorate([
    Inject(Reflector),
    __metadata("design:type", Reflector)
], BaseGuard.prototype, "reflector", void 0);
__decorate([
    Inject(OAUTH2_SERVER),
    __metadata("design:type", OAuth2Server)
], BaseGuard.prototype, "oauthServer", void 0);
BaseGuard = __decorate([
    Injectable()
], BaseGuard);
