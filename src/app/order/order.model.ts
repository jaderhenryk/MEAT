import {OrderItem} from './ordem-item/ordem-item.model';

export class Order {
	constructor (public address:string, public number:string, public optionalAddress:string, public paymentOption:string, public orderItems:OrderItem[]) {}
}