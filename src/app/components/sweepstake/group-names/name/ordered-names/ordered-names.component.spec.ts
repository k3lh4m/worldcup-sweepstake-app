import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedNamesComponent } from './ordered-names.component';

describe('OrderedNamesComponent', () => {
  let component: OrderedNamesComponent;
  let fixture: ComponentFixture<OrderedNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderedNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderedNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
