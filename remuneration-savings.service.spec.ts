import { TestBed, inject } from '@angular/core/testing';

import { RemunerationSavingsService } from './remuneration-savings.service';

describe('RemunerationSavingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemunerationSavingsService]
    });
  });

  it('should be created', inject([RemunerationSavingsService], (service: RemunerationSavingsService) => {
    expect(service).toBeTruthy();
  }));
});
