import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Restaurant} from './restaurant/restaurant.model';
import {MenuItem} from '../restaurant-detail/menu-item/menu-item.model';

import {MEAT_API} from '../app.api'

@Injectable()
export class RestaurantsService {
	
	constructor (private httpClient: HttpClient) {};	

	restaurants() : Observable<Restaurant[]> {
		return this.httpClient.get<Restaurant[]>(`${MEAT_API}/restaurants`);
	}

	restaurant(id: string) : Observable<Restaurant> {
		return this.httpClient.get<Restaurant>(`${MEAT_API}/restaurants/${id}`);
	}

	reviews(id: string) : Observable<any> {
		return this.httpClient.get<any>(`${MEAT_API}/restaurants/${id}/reviews`);
	}

	menu(id: string) : Observable<MenuItem[]> {
		return this.httpClient.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
	}
}