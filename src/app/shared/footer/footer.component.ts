import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{

  isFirstOpen = true;
  today = new Date();
  year = this.today.getFullYear();

  constructor() {
    
  }
  ngOnInit(){
  }  

}
