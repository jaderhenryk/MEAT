import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';
import { ErrorHandler } from '../app.error-handler';

import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

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
    searchControl: FormControl;
    searchForm: FormGroup;

    restaurants: Restaurant[];

    constructor(private restaurantService: RestaurantsService, private formBuilder: FormBuilder) { };

    ngOnInit() {
        this.searchControl = this.formBuilder.control('');
        this.searchForm = this.formBuilder.group({
            searchControl: this.searchControl
        });
        this.searchControl.valueChanges.pipe(
            debounceTime(500), 
            distinctUntilChanged(), 
            switchMap(searchTerm => this.restaurantService.restaurants(searchTerm))
        ).subscribe(restaurants => this.restaurants = restaurants, err => console.log(ErrorHandler.handleError(err)));
        this.restaurantService.restaurants()
            .subscribe(restaurants => this.restaurants = restaurants, err => console.log(ErrorHandler.handleError(err)));
    }

    toggleSearchBar() {
        this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
    }

}
