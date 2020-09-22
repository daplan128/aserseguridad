import { Component, OnInit } from '@angular/core';
import { UrlsService } from 'src/app/services/urls.service';
import { OutsourcingService } from 'src/app/services/outsourcing.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-outsourcing-sst',
  templateUrl: './outsourcing-sst.component.html',
  styleUrls: ['./outsourcing-sst.component.scss']
})
export class OutsourcingSstComponent implements OnInit {

  listOutsourcing = [];
  plansOutsourcing: any;
  viewHeaders = false;

  constructor(
    public outsourcingList: OutsourcingService,
    public urlink: UrlsService,
    public title: Title,
    public meta: Meta
  ) { }

  ngOnInit() {
    //Meta
    this.title.setTitle('Outsourcing SST - aSERseguridad');
    this.meta.addTag({ name: 'description', content: 'Sistemas de gestión de seguridad y salud en el trabajo'});
    this.meta.addTag({ name: 'keywords', content: 'SGSST,Sistemas de gestión de seguridad y salud en el trabajo,SST,Seguridad y salud en el trabajo,SG-SST'});
    //Service
    this.outsourcingList.getHeaders().subscribe( result => {
      this.listOutsourcing = result;
      this.plansOutsourcing = this.listOutsourcing[0].plans
    }
  );
  }

  scroll() {
    document.querySelector('#top').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

}
