import { Component, OnInit } from '@angular/core';
import { SuppliersService } from 'src/app/services/suppliers.service';
import { Title, Meta } from '@angular/platform-browser';

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
    public title: Title,
    public meta: Meta
  ) {
    this.listSuppliers.forEach(element => {
      element.body = element.body.replace("/\n/g", "<br>");
      }    
    );
  }

  ngOnInit() {
    //Meta
    this.title.setTitle('Proveedores SST - aSERseguridad');
    this.meta.addTag({ name: 'description', content: 'Sistemas de gestión de seguridad y salud en el trabajo'});
    this.meta.addTag({ name: 'keywords', content: 'SGSST,Sistemas de gestión de seguridad y salud en el trabajo,SST,Seguridad y salud en el trabajo,SG-SST'});
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
