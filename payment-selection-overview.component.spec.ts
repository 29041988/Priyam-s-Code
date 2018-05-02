import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSelectionOverviewComponent } from './payment-selection-overview.component';

describe('PaymentSelectionOverviewComponent', () => {
  let component: PaymentSelectionOverviewComponent;
  let fixture: ComponentFixture<PaymentSelectionOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentSelectionOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSelectionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
