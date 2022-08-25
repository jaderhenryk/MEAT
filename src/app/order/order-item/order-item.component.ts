import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/restaurants/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-item',
  templateUrl: './order-item.component.html'
})
export class OrderItemComponent implements OnInit {

  @Input()
  items: CartItem[] = [];

  @Output()
  increaseQuantity = new EventEmitter<CartItem>();
  @Output()
  decreaseQuantity = new EventEmitter<CartItem>();
  @Output()
  remove = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit(): void {
  }

  emitIncreaseQuantity(item: CartItem) {
		this.increaseQuantity.emit(item);
	}

	emitDecreaseQuantity(item: CartItem) {
		this.decreaseQuantity.emit(item);
	}

	emitRemove(item: CartItem) {
		this.remove.emit(item);
	}

}
