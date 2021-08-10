import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
//import { SeoService } from 'src/app/services/seo.service';
import { MetatagsService } from 'src/app/services/metatags.service';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.scss']
})
export class UsComponent implements OnInit {
  isFirstOpen = true;

  constructor(
    // public title: Title,
    // public meta: Meta
    private _title: Title,
    private _metaService: Meta,
    private metaServ: MetatagsService
  ) { }

  ngOnInit() {
    // this.title.setTitle('¿Quiénes somos?');
    // this.meta.addTag({ name: 'description', content: 'Somos una empresa enfocada en Respaldar a todas las PYMES, en la intervención de Riesgos Laborales con la representación, administración y gestión de su SG-SST.'});
    // this.meta.addTag({ name: 'keywords', content: 'Empresas de SST, Riesgos Laborales, Consultoría en SST, Asesoría en SST, SG-SST'});
    this.metaServ.createCanonicalURL();
    this._title.setTitle('¿Quiénes somos? - Respaldo a todas las Pymes');
    this._metaService.updateTag({
      name: 'description', content: 'Somos una empresa enfocada en Respaldar a todas las PYMES, en la intervención de Riesgos Laborales con la representación, administración y gestión de su SG-SST.'
    });
    this._metaService.updateTag({
      name: 'keywords', content: 'Empresas de SST, Riesgos Laborales, Consultoría en SST, Asesoría en SST, SG-SST'
    });
    // this._metaService.updateTag([
    //   {property: 'description', content: 'Somos una empresa enfocada en Respaldar a todas las PYMES, en la intervención de Riesgos Laborales con la representación, administración y gestión de su SG-SST.'},
    //   {name: 'author', content: '@Maaaik_reyes'},
    //   {name: 'keywords', content: 'Empresas de SST, Riesgos Laborales, Consultoría en SST, Asesoría en SST, SG-SST'}
    // ]);
  }
}
