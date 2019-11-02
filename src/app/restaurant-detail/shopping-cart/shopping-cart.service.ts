import {CartItem} from './cart-item.model';
import {MenuItem} from '../menu-item/menu-item.model';

export class ShoppingCartService {
	items: CartItem[] = [];

	clear():void {
		this.items = [];
	}
	
	addItem(item:MenuItem):void {
		let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id);
		if (foundItem) {
			this.increaseQuantity(foundItem);
		} else {
			this.items.push(new CartItem(item));
		}
	}

	removeItem(menuItem:CartItem):void {
		this.items.splice(this.items.indexOf(menuItem), 1);
	}

	total():number{
		return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
	}

	increaseQuantity(item: CartItem):void {
		item.quantity += 1;
	}

	decreaseQuantity(item: CartItem):void {
		item.quantity -= 1;
		if (item.quantity === 0) {
			this.removeItem(item);
		}
	}
}