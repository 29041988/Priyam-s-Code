import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonFormComponent } from './anon-form.component';

describe('AnonFormComponent', () => {
  let component: AnonFormComponent;
  let fixture: ComponentFixture<AnonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnonFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
