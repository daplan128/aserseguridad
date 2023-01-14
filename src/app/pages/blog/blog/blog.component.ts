import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from './Service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  item: {
    id: number,
    titulo: string,
    subtitulo: string,
    img: string
    nombre: string
    portada: string
  }
  articules:any
  constructor(private route: ActivatedRoute, private _apiservie:ApiserviceService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.item = JSON.parse(params.item)
        this._apiservie.getData(this.item.id).subscribe(res => {
          this.articules = res
        })
      }
    );
  }

}
