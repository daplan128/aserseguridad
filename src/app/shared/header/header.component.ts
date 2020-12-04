import { HeadersService } from './../../services/headers.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { UrlsService } from 'src/app/services/urls.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  listHeaders = [];
  viewHeaders = false;
  headersCarousel: any;
  shortArray: any;
  palabras2: any;
  constructor(
    public headersList: HeadersService,
    public urlink: UrlsService,
    private el: ElementRef) 
    { 
    this.listHeaders.forEach(element => {
      element.body = element.body.replace("/\n/g", "<br>");
      }    
    );    
  }

  ngOnInit() {
    this.headersList.getHeaders().subscribe( result => {
        this.listHeaders = result;
        this.headersCarousel = this.listHeaders[0].home;
        this.shortArray = this.headersCarousel.slice(0,4);     
        this.viewHeaders = true;
      }
    );
  }

}
