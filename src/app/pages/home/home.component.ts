import { Component, OnInit } from '@angular/core';
import { HeadersService } from 'src/app/services/headers.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listHeaders = [];
  viewHeaders = false;
  home: any;
  shortArray: any;

  constructor(
    public headersList: HeadersService,
    public title: Title,
    public meta: Meta
  ) { }

  ngOnInit() {
    //Meta
    this.title.setTitle('aSERseguridad');
    this.meta.addTag({ name: 'description', content: 'Sistemas de gestión de seguridad y salud en el trabajo'});
    this.meta.addTag({ name: 'keywords', content: 'SGSST,Sistemas de gestión de seguridad y salud en el trabajo,SST,Seguridad y salud en el trabajo,SG-SST'});
    //Service
    this.headersList.getHeaders().subscribe( result => {
        this.listHeaders = result;
        this.home = this.listHeaders[0].home;
        this.shortArray = this.home.slice(0,4);
        this.viewHeaders = true;
      }
    );
  }

}
