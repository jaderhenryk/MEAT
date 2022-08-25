import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MEAT_API } from "../app.api";
import { MenuItem } from "./restaurant-detail/menu-item/menu-item.model";
import { Restaurant } from "./restaurant/restaurant.model";

@Injectable()
export class RestaurantsService {

  constructor (private httpClient: HttpClient) {}

  restaurants(search?: string): Observable<Restaurant[]> {
    let params: HttpParams | undefined;
    if (search) {
      params = new HttpParams().set('q', search);
    }
    return this.httpClient.get<Restaurant[]>(`${MEAT_API}/restaurants`, { params });
  }

  restaurant(id: string): Observable<Restaurant> {
    return this.httpClient.get<Restaurant>(`${MEAT_API}/restaurants/${id}`);
  }

  reviews(id: string): Observable<any> {
    return this.httpClient.get<any>(`${MEAT_API}/restaurants/${id}/reviews`);
  }
  
  menu(id: string): Observable<MenuItem[]> {
    return this.httpClient.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
  }
}