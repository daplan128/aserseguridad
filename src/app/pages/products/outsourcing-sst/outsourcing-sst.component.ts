import { Component, OnInit } from '@angular/core';
import { UrlsService } from 'src/app/services/urls.service';
import { OutsourcingService } from 'src/app/services/outsourcing.service';
import { Title, Meta } from '@angular/platform-browser';
import { MetatagsService } from 'src/app/services/metatags.service';

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
    private _title: Title,
    private _metaService: Meta,
    private metaServ: MetatagsService
  ) { }

  ngOnInit() {
    //Meta
    this.metaServ.createCanonicalURL();
    this._title.setTitle('Outsourcing SST - Acompañamiento a tu empresa');    
    this._metaService.updateTag({
      name: 'description', content: 'Nuestros profesionales expertos en SST, te representarán y acompañarán en tu empresa, para ejecutar y mantener tu SG-SST.'
    });
    this._metaService.addTag({
      name: 'author', content: '@Maaaik_reyes'
    });
    this._metaService.updateTag({
      name: 'keywords', content: 'Personal de SST, Outsourcing en SST, Suministro de personal en seguridad y salud en el trabajo, Profesionales en SST, Personal por día en SST, Personal por hora en SST, Personal SST por mes'
    });
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
