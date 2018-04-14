import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantTeamSelectionComponent } from './participant-team-selection.component';

describe('ParticipantTeamSelectionComponent', () => {
  let component: ParticipantTeamSelectionComponent;
  let fixture: ComponentFixture<ParticipantTeamSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantTeamSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantTeamSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
