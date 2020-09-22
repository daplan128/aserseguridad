import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvencionesSstComponent } from './convenciones-sst.component';

describe('ConvencionesSstComponent', () => {
  let component: ConvencionesSstComponent;
  let fixture: ComponentFixture<ConvencionesSstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvencionesSstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvencionesSstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
