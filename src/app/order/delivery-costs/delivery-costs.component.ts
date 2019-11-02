import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'mt-delivery-costs',
	templateUrl: './delivery-costs.component.html'
})
export class DeliveryCostsComponent implements OnInit {

	@Input() shippingCosts:number;
	@Input() itemsValue:number;

	constructor() { }

	ngOnInit() {
	}

	total():number {
		return this.shippingCosts + this.itemsValue;
	}
}
