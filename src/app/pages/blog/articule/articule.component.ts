import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './Service';

@Component({
  selector: 'app-articule',
  templateUrl: './articule.component.html',
  styleUrls: ['./articule.component.scss']
})
export class ArticuleComponent implements OnInit {
  title: 'articule'
  articules:any
  limit: number
  offset: number
  constructor(private _apiservie:ApiserviceService) {
    this.limit = 20
    this.offset = 0
   }

  ngOnInit() {
    this._apiservie.getData(this.limit, this.offset).subscribe(res => {
      console.log(res)
      this.articules = res
    })
  }

  public goBlog(e, item) {
    console.log(item)
  }

}
