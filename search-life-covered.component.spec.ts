import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLifeCoveredComponent } from './search-life-covered.component';

describe('SearchLifeCoveredComponent', () => {
  let component: SearchLifeCoveredComponent;
  let fixture: ComponentFixture<SearchLifeCoveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLifeCoveredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLifeCoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
