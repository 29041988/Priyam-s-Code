import { TestBed, inject } from '@angular/core/testing';

import { ProductSelectionSavingsService } from './product-selection-savings.service';

describe('ProductSelectionSavingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductSelectionSavingsService]
    });
  });

  it('should be created', inject([ProductSelectionSavingsService], (service: ProductSelectionSavingsService) => {
    expect(service).toBeTruthy();
  }));
});
