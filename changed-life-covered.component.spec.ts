import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangedLifeCoveredComponent } from './changed-life-covered.component';

describe('ChangedLifeCoveredComponent', () => {
  let component: ChangedLifeCoveredComponent;
  let fixture: ComponentFixture<ChangedLifeCoveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangedLifeCoveredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangedLifeCoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
