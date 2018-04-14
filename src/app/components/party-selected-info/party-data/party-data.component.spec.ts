import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyDataComponent } from './party-data.component';

describe('PartyDataComponent', () => {
  let component: PartyDataComponent;
  let fixture: ComponentFixture<PartyDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
