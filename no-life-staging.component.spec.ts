import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NolifestagingComponent } from './nolifestaging.component';

describe('NolifestagingComponent', () => {
  let component: NolifestagingComponent;
  let fixture: ComponentFixture<NolifestagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NolifestagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NolifestagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
