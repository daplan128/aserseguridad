import { TestBed } from '@angular/core/testing';

import { OutsourcingService } from './outsourcing.service';

describe('OutsourcingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutsourcingService = TestBed.get(OutsourcingService);
    expect(service).toBeTruthy();
  });
});
