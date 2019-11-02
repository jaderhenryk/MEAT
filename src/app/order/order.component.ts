import { Component, OnInit } from '@angular/core';

import {RadioOption} from '../shared/radio/radio.option.model';
import {OrderService} from '../order/order.service';
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model';

@Component({
	selector: 'mt-order',
	templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

	payementOptions: RadioOption[] = [
		{label: 'Dinheiro', value: 'MON'},
		{label: 'Cartão de Crédito', value: 'CC'},
		{label: 'Cartão de Débitp', value: 'DC'},
		{label: 'Cartão de Refeição', value: 'REF'}
	];

	shippingCosts:number = 5;

	constructor(private orderService: OrderService) { }

	ngOnInit() {
	}

	cartItems():CartItem[] {
		return this.orderService.cartItems();
	}

	increaseQuantity(item: CartItem):void {
		this.orderService.increaseQuantity(item);
	}

	decreaseQuantity(item: CartItem):void {
		this.orderService.decreaseQuantity(item);
	}

	remove(item: CartItem):void {
		this.orderService.remove(item);
	}

	itemsValue():number {
		return this.orderService.itemsValue();
	}
}
