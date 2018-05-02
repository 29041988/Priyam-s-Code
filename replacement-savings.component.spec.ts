import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplacementSavingsComponent } from './replacement-savings.component';

describe('ReplacementSavingsComponent', () => {
  let component: ReplacementSavingsComponent;
  let fixture: ComponentFixture<ReplacementSavingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplacementSavingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplacementSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
