import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, from, switchMap } from 'rxjs';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
        state('hidden', style({
            opacity: 0,
            'max-height': '0px'
        })),
        state('visible', style({
            opacity: 1,
            'max-height': '70px',
            'margin-top': '20px'
        })),
        transition('* => *', animate('250ms 0s ease-in-out'))
    ])
]
})
export class RestaurantsComponent implements OnInit {

  searchBarState = 'hidden';
  searchControl!: FormControl;
  searchForm!: FormGroup;

  restaurants: Restaurant[] | undefined;

  constructor(
    private restaurantService: RestaurantsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.searchControl = this.formBuilder.control('');
    this.searchForm = this.formBuilder.group({
      searchControl: this.searchControl
    });
    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap( searchTerm => this.restaurantService.restaurants(searchTerm)
        .pipe(
          catchError(() => from([]))
        )
      )
    )
    .subscribe(restaurants => this.restaurants = restaurants);
    this.restaurantService.restaurants()
          .subscribe(restaurants => this.restaurants = restaurants)
  }

  toggleSearchBar() {
    this.searchBarState = this.searchBarState == 'hidden' ? 'visible' : 'hidden';
  }
}
