import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {IParticipantTeamSelectionComponent} from './participant-team-selection.component.interface';
import {IParticipant} from '../../../interfaces/party.interface';

@Component({
  selector: 'app-participant-team-selection',
  templateUrl: './participant-team-selection.component.html',
  styleUrls: ['./participant-team-selection.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ParticipantTeamSelectionComponent implements IParticipantTeamSelectionComponent {
  @Input()
  public appParticipantTeamSelectionData: IParticipant;
}
