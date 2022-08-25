import { Component, OnInit } from '@angular/core';
import { LoginService } from '../security/login/login.service';

@Component({
  selector: 'mt-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  getUser() {
    return this.loginService.user;
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  login() {
    this.loginService.handleLogin();
  }

  logout() {
    this.loginService.logout();
  }
}
