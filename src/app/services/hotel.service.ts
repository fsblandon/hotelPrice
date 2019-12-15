import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  API_URL = 'https://5c08f37bea3172001389ccbd.mockapi.io/'

  constructor(private httpclient: HttpClient) { }

  getHotel(): Observable<Hotel> {
    return this.httpclient.get<Hotel>(this.API_URL + 'hotels/tokyo/');
  }
}
