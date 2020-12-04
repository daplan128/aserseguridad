import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {
  url: any;
  
  constructor(
    public router: Router
  ) { 
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.url = val.url;
      }
    });
  }
}
