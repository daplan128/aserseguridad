import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
//import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss']
})
export class UsComponent implements OnInit {
  isFirstOpen = true;

  constructor(
    public title: Title,
    public meta: Meta
  ) { }

  ngOnInit() {
    this.title.setTitle('¿Quiénes somos? - aSERseguridad');
    this.meta.addTag({ name: 'description', content: 'Sistemas de gestión de seguridad y salud en el trabajo'});
    this.meta.addTag({ name: 'keywords', content: 'SGSST,Sistemas de gestión de seguridad y salud en el trabajo,SST,Seguridad y salud en el trabajo,SG-SST'});
  }
}
