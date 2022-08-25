import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "./login/login.service";

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

  constructor(private loginService: LoginService) {}

  checkAuthentication(path: string | undefined): boolean {
    const isLogged = this.loginService.isLoggedIn();
    if (!isLogged) {
      this.loginService.handleLogin(`/${path}`);
    }
    return isLogged;
  }

  canLoad(route: Route): boolean {
    return this.checkAuthentication(route.path);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkAuthentication(route.routeConfig?.path);
  }
}