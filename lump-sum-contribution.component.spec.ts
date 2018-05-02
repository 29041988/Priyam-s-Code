import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LumpSumContributionComponent } from './lump-sum-contribution.component';

describe('LumpSumContributionComponent', () => {
  let component: LumpSumContributionComponent;
  let fixture: ComponentFixture<LumpSumContributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LumpSumContributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LumpSumContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
