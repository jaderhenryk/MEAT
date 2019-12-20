import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order } from './order.model';
import { MEAT_API } from '../app.api';
import { LoginService } from '../security/login/login.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class OrderService {

    constructor(private shoppingCartService: ShoppingCartService, private loginService: LoginService, private httpClient: HttpClient) {}

    cartItems(): CartItem[] {
        return this.shoppingCartService.items;
    }

    increaseQuantity(item: CartItem): void {
        this.shoppingCartService.increaseQuantity(item);
    }

    decreaseQuantity(item: CartItem): void {
        this.shoppingCartService.decreaseQuantity(item);
    }

    remove(item: CartItem): void {
        this.shoppingCartService.removeItem(item);
    }

    itemsValue(): number {
        return this.shoppingCartService.total();
    }

    clear(): void {
        this.shoppingCartService.clear();
    }

    checkOrder(order: Order): Observable<Order> {
        let headers = new HttpHeaders();
        if (this.loginService.isLoggedIn()) {
            headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`);
        }
        return this.httpClient.post<Order>(`${MEAT_API}/orders`, order, {headers});
    }
}
