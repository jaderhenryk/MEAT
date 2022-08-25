import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/messages/notification.service';
import { LoginService } from './login.service';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  navigateTo: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(6)])
    });
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/');
  }

  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.loginService.login(email, password)
      .subscribe(
        user => this.notificationService.notify(`Bem vindo ${user.name}`),
        response => this.notificationService.notify(response.error.message),
        () => this.router.navigate([atob(this.navigateTo)])
      );
  }
}
