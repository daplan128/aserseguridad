import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MetatagsService } from 'src/app/services/metatags.service';

@Component({
  selector: 'app-convenciones-sst',
  templateUrl: './convenciones-sst.component.html',
  styleUrls: ['./convenciones-sst.component.scss']
})
export class ConvencionesSstComponent implements OnInit {

  constructor(
    public title: Title,
    public meta: Meta,
    private metaServ: MetatagsService
  ) { }

  ngOnInit() {
    //Meta
    this.metaServ.createCanonicalURL();
    this.title.setTitle('Convenciones SST');
    this.meta.addTag({ name: 'description', content: 'Sistemas de gestión de seguridad y salud en el trabajo'});
    this.meta.addTag({ name: 'keywords', content: 'SGSST, Sistemas de gestión de seguridad y salud en el trabajo, SST, Seguridad y salud en el trabajo, SG-SST'});
  }

}
