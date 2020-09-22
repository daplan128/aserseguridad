import { Component, OnInit } from '@angular/core';
import { UrlsService } from 'src/app/services/urls.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isCollapsed = true;

  constructor(
    public urlink: UrlsService,
  ) { }

  ngOnInit() {
  }  

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  } 
}
