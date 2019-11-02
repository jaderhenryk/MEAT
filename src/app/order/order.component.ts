import { Component, OnInit } from '@angular/core';

import {RadioOption} from '../shared/radio/radio.option.model';

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

	constructor() { }

	ngOnInit() {
	}

}
