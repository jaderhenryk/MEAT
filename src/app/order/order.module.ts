import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SharedModule} from '../shared/shared.module';

import {OrderComponent} from './order.component';
import {OrdemItemComponent} from './ordem-item/ordem-item.component';
import {DeliveryCostsComponent} from './delivery-costs/delivery-costs.component';

const ROUTES: Routes = [
    {path: '', component: OrderComponent}
];

@NgModule({
    declarations: [OrderComponent, OrdemItemComponent, DeliveryCostsComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class OrderModule {}