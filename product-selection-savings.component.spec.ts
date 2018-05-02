import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSelectionSavingsComponent } from './product-selection-savings.component';

describe('ProductSelectionSavingsComponent', () => {
  let component: ProductSelectionSavingsComponent;
  let fixture: ComponentFixture<ProductSelectionSavingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSelectionSavingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSelectionSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
