import { Component, OnInit } from '@angular/core';

import {Restaurant} from './restaurant/restaurant.model';
import {RestaurantsService} from './restaurants.service';
import {ErrorHandler} from '../app.error-handler'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {
	
	restaurants: Restaurant[] ;

  constructor(private restaurantService : RestaurantsService) { };

  ngOnInit() {
  	this.restaurantService.getRestaurants()
  		.subscribe(restaurants => this.restaurants = restaurants, err => console.log(ErrorHandler.handleError(err)));
  }

}
