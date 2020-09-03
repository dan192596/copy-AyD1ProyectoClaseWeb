import { TestBed } from '@angular/core/testing';

import { AydAppService } from './ayd-app.service';

describe('AydAppService', () => {
  let service: AydAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AydAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
