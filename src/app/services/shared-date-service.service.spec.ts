import { TestBed } from '@angular/core/testing';

import { SharedDateServiceService } from './shared-date-service.service';

describe('SharedDateServiceService', () => {
  let service: SharedDateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedDateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
