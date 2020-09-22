import { TestBed } from '@angular/core/testing';

import { MailFooterService } from './mail-footer.service';

describe('MailFooterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailFooterService = TestBed.get(MailFooterService);
    expect(service).toBeTruthy();
  });
});
