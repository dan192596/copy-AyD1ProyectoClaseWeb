import { TestBed } from '@angular/core/testing';

import { AydApiService } from './ayd-api.service';

describe('AydApiService', () => {
  let service: AydApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AydApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
