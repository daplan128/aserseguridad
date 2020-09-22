import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
declare var hbspt: any

@Component({
  selector: 'app-form-main',
  templateUrl: './form-main.component.html',
  styleUrls: ['./form-main.component.scss']
})
export class FormMainComponent implements OnInit, AfterViewInit {
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

  statesType = [
    {name: 'De 1 a 10 trabajadores'},
    {name: 'De 11 a 50 trabajadores'},
    {name: 'Más de 51 trabajadores'},
    {name: 'Propiedad horizontal'}
  ];

  statesOption = [
    {name: 'Seguros ARL'},
    {name: 'Seguros personales'},
    {name: 'Seguros emopresariales'}
  ];

  constructor(
    private frBuilder: FormBuilder,
    private mailService : MessageService 
  ) {
    this.formulario = this.frBuilder.group({
      names: ['Nombre y Apellido', [Validators.required, Validators.minLength(2)]],
      email: ['Ej, user@interlaborales.com', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      phone: ['Ej, 319 123 4567', Validators.required],
      company: ['Ej, Interlaborales', Validators.required],
      typeCompany: new FormControl(this.statesType[0]),
      optionCompany: new FormControl(this.statesOption[0])
    });
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

  onSubmit(parametro){    
    let json = {
      name: this.formulario.get('names').value
      ,email: this.formulario.get('email').value
      ,mobile: this.formulario.get('phone').value
      ,company: this.formulario.get('company').value
      ,empresa: this.formulario.get('typeCompany').value.name
      ,option: this.formulario.get('optionCompany').value.name
    }
    this.mailService.sendMail(json).subscribe();
  }

}
