import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestagingComponent } from './life-staging.component';

describe('LifestagingComponent', () => {
  let component: LifestagingComponent;
  let fixture: ComponentFixture<LifestagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifestagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifestagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
