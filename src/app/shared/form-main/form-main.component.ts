import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UrlsService } from 'src/app/services/urls.service';
declare var hbspt: any

@Component({
  selector: 'app-form-main',
  templateUrl: './form-main.component.html',
  styleUrls: ['./form-main.component.scss']
})
export class FormMainComponent implements OnInit, AfterViewInit {
  
  constructor(
    public urlink: UrlsService,
  ) {
    
   }

  ngOnInit() {
  }
  ngAfterViewInit() {
    hbspt.forms.create ({
      portalId: "5573496",
      formId: "5cc3f5d9-6034-428e-81d2-86172f2d9127",
      target: "#contactForm"
    });
  }

}
