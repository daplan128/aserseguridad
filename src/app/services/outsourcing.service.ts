import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OutsourcingService {

  private api = 'assets/content/outsourcing.json'
  itemsOutsourcing;
  

  constructor(private http: HttpClient) {
    this.itemsOutsourcing = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
  }

  getHeaders(): any{
    return this.http.get(`${this.api}`,this.itemsOutsourcing).pipe();
  }
}
