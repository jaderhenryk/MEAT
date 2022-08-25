import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { ReviewsComponent } from "./restaurant-detail/reviews/reviews.component";
import { RestaurantsComponent } from "./restaurants.component";
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';

const ROUTES: Routes = [
  { path: 'restaurants', component: RestaurantsComponent },
  { 
    path: 'restaurants/:id',
    component: RestaurantDetailComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', component: MenuComponent },
      { path: 'reviews', component: ReviewsComponent }
    ]
  }
];

@NgModule({
  declarations: [
    RestaurantsComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ReviewsComponent,
    RestaurantComponent,
    MenuItemComponent,
    ShoppingCartComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class RestaurantsModule {}