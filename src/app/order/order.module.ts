import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { OrderGuard } from './security/orderGuard';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const ROUTES: Routes = [
  { path: 'order', component: OrderComponent, canDeactivate: [ OrderGuard ]},
  { path: 'order-summary', component: OrderSummaryComponent }
]

@NgModule({
  declarations: [
    OrderComponent,
    DeliveryCostsComponent,
    OrderItemComponent,
    OrderSummaryComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class OrderModule { }
