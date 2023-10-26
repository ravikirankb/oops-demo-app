import { TestBed } from '@angular/core/testing';

import { SharedDataService } from './shared-date-service.service';

describe('SharedDateServiceService', () => {
  let service: SharedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
