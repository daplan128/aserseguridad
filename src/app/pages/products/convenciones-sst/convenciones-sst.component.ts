import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-convenciones-sst',
  templateUrl: './convenciones-sst.component.html',
  styleUrls: ['./convenciones-sst.component.scss']
})
export class ConvencionesSstComponent implements OnInit {

  constructor(
    public title: Title,
    public meta: Meta
  ) { }

  ngOnInit() {
    //Meta
    this.title.setTitle('Convenciones SST');
    this.meta.addTag({ name: 'description', content: 'Sistemas de gestión de seguridad y salud en el trabajo'});
    this.meta.addTag({ name: 'keywords', content: 'SGSST, Sistemas de gestión de seguridad y salud en el trabajo, SST, Seguridad y salud en el trabajo, SG-SST'});
  }

}
