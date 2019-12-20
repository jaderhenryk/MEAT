import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MEAT_API } from '../../app.api';
import { User } from '../user/user.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

    user: User;

    constructor(private httpClient: HttpClient, private router: Router) {}

    login(email: string, password: string): Observable<User> {
        return this.httpClient.post<User>(`${MEAT_API}/login`, {email, password}).pipe(tap(user => this.user = user));
    }

    isLoggedIn(): boolean {
        return this.user !== undefined;
    }

    handleLogin(path?: string) {
        this.router.navigate(['/login', btoa(path)]);
    }
}
