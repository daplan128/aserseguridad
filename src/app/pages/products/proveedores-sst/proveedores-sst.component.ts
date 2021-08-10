import { Component, OnInit } from '@angular/core';
import { SuppliersService } from 'src/app/services/suppliers.service';
import { Title, Meta } from '@angular/platform-browser';
import { MetatagsService } from 'src/app/services/metatags.service';

@Component({
  selector: 'app-proveedores-sst',
  templateUrl: './proveedores-sst.component.html',
  styleUrls: ['./proveedores-sst.component.scss']
})
export class ProveedoresSstComponent implements OnInit {

  listSuppliers = [];
  suppliersItems: any;
  viewHeaders = false;
  productDetail: any;
  bullets: any;
  constructor(
    public suppliersList: SuppliersService,
    private _title: Title,
    private _metaService: Meta,
    private metaServ: MetatagsService
  ) {
    this.listSuppliers.forEach(element => {
      element.body = element.body.replace("/\n/g", "<br>");
      }    
    );
  }

  ngOnInit() {
    //Meta
    this.metaServ.createCanonicalURL();
    this._title.setTitle('Proveedores SST - Ejecución de gestión y seguridad en el trabajo');    
    this._metaService.updateTag({
      name: 'description', content: 'Te apoyamos en la Ejecución de tu sistema de gestión en seguridad en el trabajo, selecciona en nuestra gama de productos en SST, y dale cumplimiento a tu plan de trabajo.'
    });
    this._metaService.addTag({
      name: 'author', content: '@Maaaik_reyes'
    });
    this._metaService.updateTag({
      name: 'keywords', content: 'Capacitaciones en SST, Inspecciones de Seguridad, Batería de Riesgos Psicosocial, Mediciones Ambientales, Auditoría en los estándares mínimos según lineamientos MINISTERIO DE TRABAJO Resolución. 0312 de 2019, Implementación de Sistemas de Gestión ISO 9001, Implementación de ISO 14001, Implementación de ISO 45001, Investigación de accidentes de trabajo MORTALES GRAVES Según Res. 1401 del 2017, Diseño de planes de prevención, preparación y atención de emergencias'
    });
    //Service
    this.suppliersList.getSuppliers().subscribe( result => {
        this.listSuppliers = result;
        this.suppliersItems = this.listSuppliers[0].suppliers;     
        this.viewHeaders = true;      
      }
    );
  }
  products(product,i){
    this.productDetail = product
    this.bullets = this.productDetail.body
  }

}
