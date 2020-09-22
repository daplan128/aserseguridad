import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsourcingSstComponent } from './outsourcing-sst.component';

describe('OutsourcingSstComponent', () => {
  let component: OutsourcingSstComponent;
  let fixture: ComponentFixture<OutsourcingSstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsourcingSstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsourcingSstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
