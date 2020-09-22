import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PymesService {

  private api = 'assets/content/pymes.json'
  itemsPymes;
  

  constructor(private http: HttpClient) {
    this.itemsPymes = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
  }

  getPymes(): any{
    return this.http.get(`${this.api}`,this.itemsPymes).pipe();
  }
}
