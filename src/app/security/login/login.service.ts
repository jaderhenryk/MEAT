import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MEAT_API } from '../../app.api';
import { User } from '../user/user.model';
import { tap, filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
export class LoginService {

    user: User;
    previousUrl: string;

    constructor(private httpClient: HttpClient, private router: Router) {
        this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: NavigationEnd) => this.previousUrl = e.url);
    }

    login(email: string, password: string): Observable<User> {
        return this.httpClient.post<User>(`${MEAT_API}/login`, {email, password}).pipe(tap(user => this.user = user));
    }

    logout() {
        this.user = undefined;
    }

    isLoggedIn(): boolean {
        return this.user !== undefined;
    }

    handleLogin(path: string = this.previousUrl) {
        this.router.navigate(['/login', btoa(path)]);
    }
}
