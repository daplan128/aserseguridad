import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormMainComponent } from './shared/form-main/form-main.component';
import { HomeComponent } from './pages/home/home.component';
import { UsComponent } from './pages/us/us.component';
import { ProductsComponent } from './pages/products/products.component';
import { SerPymeSstComponent } from './pages/products/ser-pyme-sst/ser-pyme-sst.component';
import { OutsourcingSstComponent } from './pages/products/outsourcing-sst/outsourcing-sst.component';
import { ConvencionesSstComponent } from './pages/products/convenciones-sst/convenciones-sst.component';
import { ProveedoresSstComponent } from './pages/products/proveedores-sst/proveedores-sst.component';
import { Error404Component } from './shared/error404/error404.component';

//NGX BOOTSTRAP
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';

//MASCARA CELULAR
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    FormMainComponent,
    HomeComponent,
    UsComponent,
    ProductsComponent,
    SerPymeSstComponent,
    OutsourcingSstComponent,
    ConvencionesSstComponent,
    ProveedoresSstComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    //Ngx Bootstrap
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    //Mask
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
