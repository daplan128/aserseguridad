import { TestBed } from '@angular/core/testing';

import { PymesService } from './pymes.service';

describe('PymesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PymesService = TestBed.get(PymesService);
    expect(service).toBeTruthy();
  });
});
