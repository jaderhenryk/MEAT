import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../restaurant/restaurant.model';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant | undefined;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.restaurantsService.restaurant(this.route.snapshot.params['id'])
      .subscribe( restaurant => this.restaurant = restaurant )
  }

}
