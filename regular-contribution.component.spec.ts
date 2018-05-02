import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularContributionComponent } from './regular-contribution.component';

describe('RegularContributionComponent', () => {
  let component: RegularContributionComponent;
  let fixture: ComponentFixture<RegularContributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularContributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
