import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {CartItem} from '../../restaurant-detail/shopping-cart/cart-item.model';

@Component({
	selector: 'mt-ordem-item',
	templateUrl: './ordem-item.component.html'
})
export class OrdemItemComponent implements OnInit {

	@Input() items: CartItem[];

	@Output() increaseQuantity = new EventEmitter<CartItem>();
	@Output() decreaseQuantity = new EventEmitter<CartItem>();
	@Output() remove = new EventEmitter<CartItem>();

	constructor() { }

	ngOnInit() {
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
