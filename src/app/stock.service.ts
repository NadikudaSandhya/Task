import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  apiUrl = 'https://intradayscreener.com/api/openhighlow/cash';

  constructor(private http: HttpClient) { }

  getStocks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
