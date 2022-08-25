import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MEAT_API } from '../app.api';
import { CartItem } from '../restaurants/restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from '../restaurants/restaurant-detail/shopping-cart/shopping-cart.service';
import { Order } from './order.model';

@Injectable()
export class OrderService {

  constructor(
    private shoppingCartService: ShoppingCartService,
    private httpClient: HttpClient
  ) { }

  cartItems(): CartItem[] {
    return this.shoppingCartService.items;
  }

  increaseQuantity(item: CartItem): void {
    this.shoppingCartService.increasyQuantity(item);
  }

  decreaseQuantity(item: CartItem): void {
    this.shoppingCartService.decreasyQuantity(item);
  }

  remove(item: CartItem) {
    this.shoppingCartService.removeItem(item);
  }

  itemsValue(): number {
    return this.shoppingCartService.total();
  }

  clear(): void {
    this.shoppingCartService.clear();
  }

  checkOrder(order: Order): Observable<string> {
    return this.httpClient.post<Order>(`${MEAT_API}/orders`, order)
      .pipe(
        map(o => o.id)
      );
  }
}
