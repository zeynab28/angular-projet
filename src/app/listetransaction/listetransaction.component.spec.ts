import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListetransactionComponent } from './listetransaction.component';

describe('ListetransactionComponent', () => {
  let component: ListetransactionComponent;
  let fixture: ComponentFixture<ListetransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListetransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListetransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
