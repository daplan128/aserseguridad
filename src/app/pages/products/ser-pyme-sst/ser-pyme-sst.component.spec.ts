import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerPymeSstComponent } from './ser-pyme-sst.component';

describe('SerPymeSstComponent', () => {
  let component: SerPymeSstComponent;
  let fixture: ComponentFixture<SerPymeSstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerPymeSstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerPymeSstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
