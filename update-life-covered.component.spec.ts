import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLifeCoveredComponent } from './update-life-covered.component';

describe('UpdateLifeCoveredComponent', () => {
  let component: UpdateLifeCoveredComponent;
  let fixture: ComponentFixture<UpdateLifeCoveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLifeCoveredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLifeCoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
