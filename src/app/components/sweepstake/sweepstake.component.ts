import {Component, Input, ViewEncapsulation} from '@angular/core';
import {IParty} from '../../interfaces/party.interface';

@Component({
  selector: 'app-sweepstake',
  templateUrl: './sweepstake.component.html',
  styleUrls: ['./sweepstake.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SweepstakeComponent {
  @Input()
  public appSweepstakePartyData: IParty;
}
