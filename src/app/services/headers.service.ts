import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeadersService {

  private api = 'assets/content/headers.json'
  itemsHeaders;
  

  constructor(private http: HttpClient) {
    this.itemsHeaders = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
  }

  getHeaders(): any{
    return this.http.get(`${this.api}`,this.itemsHeaders).pipe();
  }
}
