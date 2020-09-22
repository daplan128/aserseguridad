import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  private api = 'assets/content/suppliers.json'
  itemsSuppliers;
  

  constructor(private http: HttpClient) {
    this.itemsSuppliers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
  }

  getSuppliers(): any{
    return this.http.get(`${this.api}`,this.itemsSuppliers).pipe();
  }
}
