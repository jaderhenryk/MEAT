import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Restaurant} from './restaurant/restaurant.model';

import {MEAT_API} from '../app.api'

@Injectable()
export class RestaurantsService {
	
	constructor (private httpClient: HttpClient) {};	

	getRestaurants() : Observable<Restaurant[]> {
		return this.httpClient.get<Restaurant[]>(`${MEAT_API}/restaurants`);
	}
}