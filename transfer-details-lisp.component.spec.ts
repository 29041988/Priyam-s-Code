import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferDetailsLispComponent } from './transfer-details-lisp.component';

describe('TransferDetailsLispComponent', () => {
  let component: TransferDetailsLispComponent;
  let fixture: ComponentFixture<TransferDetailsLispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferDetailsLispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferDetailsLispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
