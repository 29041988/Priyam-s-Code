import { TestBed, inject } from '@angular/core/testing';

import { InvserveService } from './invserve.service';

describe('InvserveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvserveService]
    });
  });

  it('should be created', inject([InvserveService], (service: InvserveService) => {
    expect(service).toBeTruthy();
  }));
});
