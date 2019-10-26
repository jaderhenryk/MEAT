import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import {registerLocaleData} from '@angular/common';
import localeBr from '@angular/common/locales/pt';
registerLocaleData(localeBr);

import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsService } from './restaurants/restaurants.service';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        AboutComponent,
        RestaurantsComponent,
        RestaurantComponent,
        RestaurantDetailComponent,
        MenuComponent,
        ShoppingCartComponent,
        MenuItemComponent,
        ReviewsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [RestaurantsService, ShoppingCartService, {provide: LOCALE_ID, useValue: 'pt'}],
    bootstrap: [AppComponent]
})
export class AppModule { }
