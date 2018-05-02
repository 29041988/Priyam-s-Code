import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LobPageComponent } from './lob-page.component';

describe('LobPageComponent', () => {
  let component: LobPageComponent;
  let fixture: ComponentFixture<LobPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LobPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LobPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
