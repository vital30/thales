import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  //baseUrl = https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key};
  baseUrl = 'https://api.openweathermap.org/data/2.5/onecall?';
  appid = '1890fcd579ac51bb12f42af3ceed6428';
  getData(city): Observable<any> {
    const lat = city.coord.lat;
    const lon = city.coord.lon;
    const url = this.baseUrl + 'lat=' + lat + '&lon=' + lon + '&appid=' + this.appid;
    return this.http.get(url);
  }

}
