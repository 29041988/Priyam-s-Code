import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundAccordionComponent } from './fund-accordion.component';

describe('FundAccordionComponent', () => {
  let component: FundAccordionComponent;
  let fixture: ComponentFixture<FundAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
