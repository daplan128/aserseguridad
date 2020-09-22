import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresSstComponent } from './proveedores-sst.component';

describe('ProveedoresSstComponent', () => {
  let component: ProveedoresSstComponent;
  let fixture: ComponentFixture<ProveedoresSstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedoresSstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedoresSstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
