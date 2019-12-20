import { CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';

@Injectable()
export class LoggedInGurad implements CanLoad, CanActivate {

    constructor(private loginService: LoginService) {}

    checkAuthetication(path: string): boolean {
        const isLogged = this.loginService.isLoggedIn();
        if (!isLogged) {
            this.loginService.handleLogin(`/${path}`);
        }
        return isLogged;
    }

    canLoad(route: Route): boolean {
        return this.checkAuthetication(route.path);
    }

    canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
        return this.checkAuthetication(activatedRoute.routeConfig.path);
    }
}
