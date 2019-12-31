import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';

import { RadioOption } from '../shared/radio/radio.option.model';
import { OrderService } from '../order/order.service';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order } from './order.model';
import { OrderItem } from './ordem-item/ordem-item.model';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'mt-order',
    templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

    constructor(private orderService: OrderService, private router: Router, private formBuilder: FormBuilder) { }

    emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    numberPattern = /^[0-9]*$/;

    orderForm: FormGroup;

    shippingCosts = 5;

    orderId: string;

    paymentOptions: RadioOption[] = [
        { label: 'Dinheiro', value: 'MON' },
        { label: 'Cartão de Crédito', value: 'CC' },
        { label: 'Cartão de Débito', value: 'DC' },
        { label: 'Cartão de Refeição', value: 'REF' }
    ];

    static equalsTo(group: AbstractControl): { [key: string]: boolean } {
        const email = group.get('email');
        const emailConfirmation = group.get('emailConfirmation');
        if (!email || !emailConfirmation) {
            return undefined;
        }
        if (email.value !== emailConfirmation.value) {
            return { emailsNotMatch: true };
        }
        return undefined;
    }

    ngOnInit() {
        this.orderForm = new FormGroup({
            name: new FormControl('', {validators: [Validators.required, Validators.minLength(5)]}),
            email: new FormControl('', {validators: [Validators.required, Validators.pattern(this.emailPattern)]}),
            emailConfirmation: new FormControl('', {validators: [Validators.required, Validators.pattern(this.emailPattern)]}),
            address: new FormControl('', {validators: [Validators.required, Validators.minLength(5)]}),
            number: new FormControl('', {validators: [Validators.required, Validators.pattern(this.numberPattern)]}),
            optionalAddress: new FormControl(''),
            paymentOption: new FormControl('', {validators: [Validators.required], updateOn: 'change'})
        }, { validators: [OrderComponent.equalsTo], updateOn: 'blur' });
    }

    cartItems(): CartItem[] {
        return this.orderService.cartItems();
    }

    increaseQuantity(item: CartItem): void {
        this.orderService.increaseQuantity(item);
    }

    decreaseQuantity(item: CartItem): void {
        this.orderService.decreaseQuantity(item);
    }

    remove(item: CartItem): void {
        this.orderService.remove(item);
    }

    itemsValue(): number {
        return this.orderService.itemsValue();
    }

    isOrderCompleted(): boolean {
        return this.orderId !== undefined;
    }

    checkOrder(order: Order): void {
        order.orderItems = this.cartItems().map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));
        this.orderService.checkOrder(order)
            .pipe(tap((id) => this.orderId = id))
            .subscribe(() => {
            this.router.navigate(['/order-summary']);
            this.orderService.clear();
        });
    }
}
