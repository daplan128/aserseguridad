import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from './Service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  info: {
    id: number,
    titulo: string,
    subtitulo: string,
    img: string
    nombre: string
    portada: string,
    link: string
  }
  articules:any
  articules_list:any
  constructor(private route: ActivatedRoute, private _apiservie:ApiserviceService) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.info = JSON.parse(params.item)
        this._apiservie.getData(this.info.id).subscribe(res => {
          this.articules = res
        })
        this._apiservie.getDataArticulesList().subscribe(res => {
          this.articules_list = res
        })
      }
    );
  }

}
