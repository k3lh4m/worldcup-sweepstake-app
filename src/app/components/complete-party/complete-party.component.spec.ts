import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletePartyComponent } from './complete-party.component';

describe('CompletePartyComponent', () => {
  let component: CompletePartyComponent;
  let fixture: ComponentFixture<CompletePartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletePartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletePartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
