import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

import {RadioOption} from '../shared/radio/radio.option.model';
import {OrderService} from '../order/order.service';
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model';
import {Order} from './order.model';
import {OrderItem} from './ordem-item/ordem-item.model';

@Component({
	selector: 'mt-order',
	templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

	emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
	numberPattern = /^[0-9]*$/

	orderForm: FormGroup;

	paymentOptions: RadioOption[] = [
		{label: 'Dinheiro', value: 'MON'},
		{label: 'Cartão de Crédito', value: 'CC'},
		{label: 'Cartão de Débitp', value: 'DC'},
		{label: 'Cartão de Refeição', value: 'REF'}
	];

	shippingCosts:number = 5;

	constructor(private orderService: OrderService, private router:Router, private formBuilder:FormBuilder) { }

	ngOnInit() {
		this.orderForm = this.formBuilder.group({
			name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
			email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
			emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
			address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
			number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
			optionalAddress: this.formBuilder.control(''),
			paymentOption: this.formBuilder.control('', [Validators.required])
		}, {validator: OrderComponent.equalsTo});
	}

	static equalsTo(group: AbstractControl):{[key:string]:boolean} {
		const email = group.get('email');
		const emailConfirmation = group.get('emailConfirmation');
		if (!email || !emailConfirmation) {
			return undefined;
		}
		if (email.value !== emailConfirmation.value) {
			return {emailsNotMatch:true};
		}
		return undefined;
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

	checkOrder(order: Order):void {
		order.orderItems = this.cartItems().map((item:CartItem) => new OrderItem(item.quantity, item.menuItem.id));
		this.orderService.checkOrder(order).subscribe(response => {
			this.router.navigate(['/order-summary']);
			this.orderService.clear();
		});
	}
}
