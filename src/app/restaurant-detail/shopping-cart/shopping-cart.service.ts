import { Injectable } from '@angular/core';
import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';
import { NotificationService } from 'src/app/shared/messages/notification.service';

@Injectable()
export class ShoppingCartService {

    constructor(private notificationService: NotificationService){};

    items: CartItem[] = [];

    clear(): void {
        this.items = [];
    }

    addItem(menuItem: MenuItem): void {
        const itemFound = this.items.find((item) => item.menuItem.id === menuItem.id);
        if (itemFound) {
            this.increaseQuantity(itemFound);
        } else {
            this.items.push(new CartItem(menuItem));
        }
        this.notificationService.notify(`Você adicionou o item ${menuItem.name}`);
    }

    removeItem(item: CartItem): void {
        this.items.splice(this.items.indexOf(item), 1);
        this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`);
    }

    total(): number {
        return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
    }

    increaseQuantity(item: CartItem): void {
        item.quantity += 1;
    }

    decreaseQuantity(item: CartItem): void {
        item.quantity -= 1;
        if (item.quantity === 0) {
            this.removeItem(item);
        }
    }
}