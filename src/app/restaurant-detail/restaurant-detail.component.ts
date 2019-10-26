import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ErrorHandler } from '../app.error-handler';
import { RestaurantsService } from '../restaurants/restaurants.service';

import { Restaurant } from '../restaurants/restaurant/restaurant.model';

@Component({
	selector: 'mt-restaurant-detail',
	templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

	restaurant: Restaurant;

	constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.restaurantsService.restaurant(this.route.snapshot.params['id'])
			.subscribe(restaurant => this.restaurant = restaurant, err => console.log(ErrorHandler.handleError(err)))
	}
}