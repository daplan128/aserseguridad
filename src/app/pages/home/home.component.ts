import { Component, OnInit } from '@angular/core';
import { HeadersService } from 'src/app/services/headers.service';
import { Title, Meta } from '@angular/platform-browser';
import { MetatagsService } from 'src/app/services/metatags.service';

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
    private _title: Title,
    private _metaService: Meta,
    private metaServ: MetatagsService
  ) { }

	ngOnInit() {
			//Meta
			this.metaServ.createCanonicalURL();
			this._title.setTitle('aSERseguridad - Tu Respaldo en riesgos laborales');    
			this._metaService.updateTag({
			name: 'description', content: 'Representamos, administramos y gestionamos tu Sistemas de Gestión de Seguridad y Salud en el Trabajo. Conoce a detalle cada una de nuestras líneas de servicio y selecciona la que más se ajuste a tus necesidades'
			});
			this._metaService.addTag({
			name: 'author', content: '@Maaaik_reyes'
			});
			this._metaService.updateTag({
			name: 'keywords', content: 'Empresas de SST, Riesgos Laborales, Consultoría en SST, Asesoría en SST, SG-SST'
			});
			// this.title.setTitle('aSERseguridad');
			// this.meta.addTag({ name: 'description', content: 'Representamos, administramos y gestionamos tu Sistemas de Gestión de Seguridad y Salud en el Trabajo.'});
			// this.meta.addTag({ name: 'keywords', content: 'Empresas de SST, Riesgos Laborales, Consultoría en SST, Asesoría en SST, SG-SST'});
			//Service
			this.headersList.getHeaders().subscribe( result => {
				this.listHeaders = result;
				this.home = this.listHeaders[0].home;
				this.shortArray = this.home.slice(0,4);
				this.viewHeaders = true;
			}
		);
	}
	// createCanonicalURL(url?:string) {
	// 	let canURL = url == undefined ? this.dom.URL : url;
	// 	let link: HTMLLinkElement = this.dom.createElement('link');
	// 	link.setAttribute('rel', 'canonical');
	// 	this.dom.head.appendChild(link);
	// 	link.setAttribute('href', canURL);
	// }

}
