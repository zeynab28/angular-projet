import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplepaginationComponent } from './exemplepagination.component';

describe('ExemplepaginationComponent', () => {
  let component: ExemplepaginationComponent;
  let fixture: ComponentFixture<ExemplepaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemplepaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplepaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
