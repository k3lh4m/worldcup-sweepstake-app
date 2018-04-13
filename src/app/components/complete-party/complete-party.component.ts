import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data-service/data.service';
import {ICompleteParty} from './complete-party.component.interface';
import {ICompletePartyConfigButton} from './_interfaces/complete-party-button-config.interface';

@Component({
  selector: 'app-complete-party',
  templateUrl: './complete-party.component.html',
  styleUrls: ['./complete-party.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CompletePartyComponent implements ICompleteParty {
  @Input()
  public appCompletePartyConfig: ICompletePartyConfigButton;
}
