import { CanDeactivate } from '@angular/router';
import { OrderComponent } from '../order.component';

export class OrderGuard implements CanDeactivate<OrderComponent> {
  canDeactivate(orderComponent: OrderComponent): boolean {
    if (!orderComponent.isOrderCompleted()) {
      return window.confirm('Deseja desistir da compra?');
    } else {
      return true;
    }
  }
}