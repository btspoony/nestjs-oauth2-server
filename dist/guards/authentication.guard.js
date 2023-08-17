var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { from } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { BaseGuard } from './base.guard.js';
export let OAuth2ServerAuthenticationGuard = class OAuth2ServerAuthenticationGuard extends BaseGuard {
    action(request, response, options) {
        return from(this.oauthServer.authenticate(request, response, options));
    }
    includeOauthInRequest(request, token) {
        request.oauth = { token };
    }
};
OAuth2ServerAuthenticationGuard = __decorate([
    Injectable()
], OAuth2ServerAuthenticationGuard);
