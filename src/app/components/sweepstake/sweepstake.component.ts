import {Component, Input, ViewEncapsulation} from '@angular/core';
import {IParticipant, IParty} from '../../interfaces/party.interface';
import * as _ from 'lodash';

@Component({
  selector: 'app-sweepstake',
  templateUrl: './sweepstake.component.html',
  styleUrls: ['./sweepstake.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SweepstakeComponent {
  @Input()
  public appSweepstakePartyData: IParty;

  public shuffledParticpants: IParticipant;

  public shuffleAndSelectTeams(): void {
    const immutableArray = _.cloneDeep(this.appSweepstakePartyData.participants);
    this.shuffledParticpants = _.shuffle(immutableArray);
  }
}
