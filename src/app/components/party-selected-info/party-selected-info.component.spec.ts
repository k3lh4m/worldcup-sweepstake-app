import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartySelectedInfoComponent } from './party-selected-info.component';

describe('PartySelectedInfoComponent', () => {
  let component: PartySelectedInfoComponent;
  let fixture: ComponentFixture<PartySelectedInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartySelectedInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartySelectedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
