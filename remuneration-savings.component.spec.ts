import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemunerationSavingsComponent } from './remuneration-savings.component';

describe('RemunerationSavingsComponent', () => {
  let component: RemunerationSavingsComponent;
  let fixture: ComponentFixture<RemunerationSavingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemunerationSavingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemunerationSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
