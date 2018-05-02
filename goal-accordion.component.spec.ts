import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalAccordionComponent } from './goal-accordion.component';

describe('GoalAccordionComponent', () => {
  let component: GoalAccordionComponent;
  let fixture: ComponentFixture<GoalAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
