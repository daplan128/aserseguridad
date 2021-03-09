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
    this.title.setTitle('Outsourcing SST');
    this.meta.addTag({ name: 'description', content: 'Nuestros profesionales expertos en SST, te representarán y acompañarán en tu empresa, para ejecutar y mantener tu SG-SST.'});
    this.meta.addTag({ name: 'keywords', content: 'Personal de SST, Outsourcing en SST, Suministro de personal en seguridad y salud en el trabajo, Profesionales en SST, Personal por día en SST, Personal por hora en SST, Personal SST por mes'});
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
