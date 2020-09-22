import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  httpOptions;
  
  constructor(private http : HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'
    })
    };

  }
  sendMail(json:any): any{
    return this.http.post(`php/send.php`,json).pipe();
  }
}
