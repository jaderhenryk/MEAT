import { ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './security/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { ApplicationErrorHandler } from './app.error.handler';
registerLocaleData(localeBr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserDetailComponent,
    AboutComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt'},
    { provide: ErrorHandler, useClass: ApplicationErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
