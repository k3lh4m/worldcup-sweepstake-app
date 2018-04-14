import {Component, Input, ViewEncapsulation} from '@angular/core';
import {IPartyDataSingle} from './party-data.component.interface';

@Component({
  selector: 'app-party-data',
  templateUrl: './party-data.component.html',
  styleUrls: ['./party-data.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PartyDataComponent implements IPartyDataSingle {
  @Input()
  public appPartyDataKey: string;

  @Input()
  public appPartyDataValue: number;
}

