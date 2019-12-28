import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RestaurantsService} from '../restaurants/restaurants.service';
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service';
import {OrderService} from '../order/order.service';
import {NotificationService} from '../shared/messages/notification.service';
import {LoginService} from '../security/login/login.service';
import {LoggedInGurad} from '../security/loggedInGuard';

import {InputComponent} from './input/input.component';
import {RadioComponent} from './radio/radio.component';
import {RatingComponent} from './rating/rating.component';
import {SnackbarComponent} from './messages/snackbar/snackbar.component';
import { OrderGuard } from '../order/security/orderGuard';

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [RestaurantsService, ShoppingCartService, OrderService, NotificationService, LoginService, LoggedInGurad, OrderGuard]
        };
    }
}
