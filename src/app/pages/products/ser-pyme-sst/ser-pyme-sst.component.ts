import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UrlsService } from 'src/app/services/urls.service';
import { PymesService } from 'src/app/services/pymes.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { MessageService } from 'src/app/services/message.service';
import { Title, Meta } from '@angular/platform-browser';

declare var $: any;
declare var hbspt: any

@Component({
  selector: 'app-ser-pyme-sst',
  templateUrl: './ser-pyme-sst.component.html',
  styleUrls: ['./ser-pyme-sst.component.scss']
})
export class SerPymeSstComponent implements OnInit, AfterViewInit {
  listBullets = [];
  viewBullets = false;
  bullets: any;
  plans: any;
  category: any;
  categories: any;
  categories1: any;
  public offers = [];
  planSelect: any;
  headPlan: any;
  namePlan: any;
  idForm: any;

  //Forms
  formulario: FormGroup;
  formSubmitted: boolean = false;

  myForm: FormGroup;
  submitted = false;
  firstName = "Debes ingresar tu nombre";
  lastName = " Debes ingresar tus apellidos";
  email = " El emial es requerido";
  emailIncomplete = "Debes ingresar un email valido";
  phone = "Inngresa un número de contacto valido";
  company= " Debes ingresar el nombre de tu empresa";
  typeCompany = "Elige el tipodeempresa que tienes";
  typeDocument = "Debes elegir un tipo de documento";
  documentNumber = "Escribe tu número de documento";
  documentDate = "Elige una fecha en el calendario";
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(
    public pyme: PymesService,
    public urlink: UrlsService,
    private frBuilder: FormBuilder,
    private mailService : MessageService,
    public title: Title,
    public meta: Meta
  ) { 
    this.formulario = this.frBuilder.group({
      email: ['Ej, user@gmail.com', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      phone: ['Ej, 319 123 4567', Validators.required],
      company: ['Ej, Interlaborales', Validators.required],
    });
  }  
  onSubmit(parametro) {
    let json = {
      email: this.formulario.get('email').value
      ,phone: this.formulario.get('phone').value
      ,company: this.formulario.get('company').value
    }
    this.mailService.sendMail(json).subscribe();
    if (this.formulario.invalid) {        
      return;        
    } else {
      $('#successModal').modal('show')
      window.open(this.planSelect.pdf, '_blank');
      //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formulario.value))
    }

      // alert('Mensaje Enviado !')
      //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formulario.value))
  }  

  toggleChild(i,h) {    
    const resumen = $('#detail'+i+h);
    
    if(resumen[0].id == 'detail01'){
      $('#detail01').removeClass('d-none');
      $('#detail01').addClass('active');
      $('#detail02').addClass('d-none');
      $('#detail03').addClass('d-none');
    }else if (resumen[0].id == 'detail02') {
      $('#detail01').addClass('d-none');
      $('#detail02').removeClass('d-none');
      $('#detail02').addClass('active');
      $('#detail03').addClass('d-none');
    }else if (resumen[0].id == 'detail03') {
      $('#detail01').addClass('d-none');      
      $('#detail02').addClass('d-none');
      $('#detail03').removeClass('d-none');
      $('#detail03').addClass('active');
    }

    if(resumen[0].id == 'detail11'){
      $('#detail11').removeClass('d-none');
      $('#detail11').addClass('active');
      $('#detail12').addClass('d-none');
      $('#detail13').addClass('d-none');
    }else if (resumen[0].id == 'detail12') {
      $('#detail11').addClass('d-none');
      $('#detail12').removeClass('d-none');
      $('#detail12').addClass('active');
      $('#detail13').addClass('d-none');
    }else if (resumen[0].id == 'detail13') {
      $('#detail11').addClass('d-none');      
      $('#detail12').addClass('d-none');
      $('#detail13').removeClass('d-none');
      $('#detail13').addClass('active');
    }

    if(resumen[0].id == 'detail21'){
      $('#detail21').removeClass('d-none');
      $('#detail21').addClass('active');
      $('#detail22').addClass('d-none');
      $('#detail23').addClass('d-none');
    }else if (resumen[0].id == 'detail22') {
      $('#detail21').addClass('d-none');
      $('#detail22').removeClass('d-none');
      $('#detail22').addClass('active');
      $('#detail23').addClass('d-none');
    }else if (resumen[0].id == 'detail23') {
      $('#detail21').addClass('d-none');      
      $('#detail22').addClass('d-none');
      $('#detail23').removeClass('d-none');
      $('#detail23').addClass('active');
    }
  }
  ngOnInit() {
    //Meta
    this.title.setTitle('Ser Pymes SST');
    this.meta.addTag({ name: 'description', content: 'Con nuestra modalidad de Suscripción del SG-SST te respaldamos, representamos, administramos y gestionamos el Sistemas de Gestión de Seguridad y Salud en el Trabajo de tu empresa.'});
    this.meta.addTag({ name: 'keywords', content: 'Sistemas de Gestión de Seguridad y Salud en el Trabajo, Implementación del SG-SST, SGSST, Como implementar un SG-SST, Consultores en SST, Seguridad y Salud en el Trabajo, Empresa que implemente un SG-SST'});
    //Products
    this.pyme.getPymes().subscribe( result => {
      this.listBullets = result;
      this.bullets = this.listBullets[0].bullets
      this.plans = this.listBullets[0].plans
      this.viewBullets = true;

      result.forEach(categories => {
        categories.plans.forEach(offerPlan => {
          var offersData = { head: "", icon: "", namePlan: "", dataOffer : {}, percentage : ""};
          this.categories1 = offerPlan.category
            offersData.head = offerPlan.head;
            offersData.dataOffer = offerPlan.category;
            offersData.percentage = offerPlan.percentage
            this.offers.push(offersData);
        });
      });
    }
  );
  }

  downloadPlan(head, plan,i){
    this.headPlan = head
    this.planSelect = plan;
    this.idForm = this.planSelect.idForm
    this.namePlan = this.planSelect.plan;
    //Forms
    //1 from 10 workers
    hbspt.forms.create ({
      portalId: "5573496",
      formId: "2fbcb01a-e62a-4591-94e2-819d34dc5e69",
      target: "#basic-1-from-10-workers"
    });    
    hbspt.forms.create ({
      portalId: "5573496",
      formId: "914713d6-7948-45ea-807d-050c7cb682ab",
      target: "#plus-1-from-10-workers",      
    });
    hbspt.forms.create ({
      portalId: "5573496",
      formId: "3bb94d26-af67-4bc4-8b70-1f109ba926ca",
      target: "#premium-1-from-10-workers",      
    });
    //11 from 50 workers
    hbspt.forms.create ({
      portalId: "5573496",
      formId: "c7187afa-2271-4006-aaf9-c17dc5f233f3",
      target: "#basic-11-from-50-workers",      
    });
    hbspt.forms.create ({
      portalId: "5573496",
      formId: "fa907d0e-ae5f-4d51-a8db-6a1420cb4934",
      target: "#plus-11-from-50-workers",      
    });
    hbspt.forms.create ({
      portalId: "5573496",
      formId: "17d1538c-2929-4e0e-8484-50e035d47b13",
      target: "#premium-11-from-50-workers",      
    });
    //More 51 workers
    hbspt.forms.create ({
      portalId: "5573496",
      formId: "7119ec6b-4346-4ca8-abfd-ed791b411926",
      target: "#basic-more-51-workers",      
    });
    hbspt.forms.create ({
      portalId: "5573496",
      formId: "71b9d75c-5a77-4bc7-b526-d76c6f1dd27a",
      target: "#plus-more-51-workers",      
    });
    hbspt.forms.create ({
      portalId: "5573496",
      formId: "f1d719df-4855-42c2-a2e1-7508ed5eed8d",
      target: "#premium-more-51-workers",      
    });
  }
  closeModal() {
    setTimeout(function(){
      $("#downloadPlanModal").modal('hide')
      window.location.reload();
  }, 1000);
  }

  ngAfterViewInit() {
    hbspt.forms.create ({
      portalId: "5573496",
      formId: "538c6530-95e7-403b-8b7c-5ae0d413a31f",
      target: "#appSG-SST"
    });
  }
}
