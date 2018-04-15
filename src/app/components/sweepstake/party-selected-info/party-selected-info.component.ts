import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ApiService} from '../../../services/api/api.service';
import {DataService} from '../../../services/data-service/data.service';
import {ActivatedRoute} from '@angular/router';
import {IPartyCompleted} from './party-selected-info.component.interface';
import {ICompletePartyConfigButton} from '../../complete-party/_interfaces/complete-party-button-config.interface';
import {sweepstakeSetting} from '../../../constants/sweepstake-settings.constant';

@Component({
  selector: 'app-party-selected-info',
  templateUrl: './party-selected-info.component.html',
  styleUrls: ['./party-selected-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PartySelectedInfoComponent implements IPartyCompleted, OnInit {
  @Input()
  public appPartySelectedIsCompleted: boolean;

  @Input()
  public appPartySelectedTotalParticpants: number;

  @Output()
  public appPartySelectedNextStageTriggered: EventEmitter<any> = new EventEmitter<void>();

  public completeButtonConfig: ICompletePartyConfigButton;
  public nextStageButtonConfig: {
    label: string;
  };
  public sweepStakeInformationData = [];
  private apiService: ApiService;
  private router: ActivatedRoute;
  private dataService: DataService;
  private paramsId: number;

  constructor(apiService: ApiService, router: ActivatedRoute, dataService: DataService) {
    this.apiService = apiService;
    this.router = router;
    this.dataService = dataService;
  }

  public ngOnInit() {
    this.setCompletePartyButtonConfig();
    this.setNextStageButtonConfig();
    this.setSweepStakeData();
  }

  public emitToParent(): void {
    this.appPartySelectedNextStageTriggered.emit();
  }

  private setCompletePartyButtonConfig(): void {
    this.completeButtonConfig = {
      label: 'Edit Party',
      isCompleted: this.appPartySelectedIsCompleted,
      action: () => {
        const routerParams = this.router.params;

        routerParams.subscribe((params) => {
          this.paramsId = params.id;
        });

        const apiLink = `/api/party/${this.paramsId}/?completedParty=${!this.appPartySelectedIsCompleted}`;

        this.apiService.partyCompleted(apiLink, !this.appPartySelectedIsCompleted).subscribe(() => {
          this.dataService.refreshData();
        });
      }
    };
  }

  private getTeamsPerParticpant(): Object {
    const maxNumber = sweepstakeSetting.MaxNumberOfTeams;

    return {
      label: 'Teams Per Particpant',
      value: Math.floor(maxNumber / this.appPartySelectedTotalParticpants)
    };
  }

  private getTeamsLeftOver(): Object {
    const maxNumber = sweepstakeSetting.MaxNumberOfTeams;

    return {
      label: 'Teams left over',
      value: maxNumber % this.appPartySelectedTotalParticpants
    };
  }

  private setSweepStakeData(): void {
    this.sweepStakeInformationData.push(this.getTeamsPerParticpant());
    this.sweepStakeInformationData.push(this.getTeamsLeftOver());
  }

  private setNextStageButtonConfig() {
    this.nextStageButtonConfig = {
      label: 'Shuffle and draw teams',
    };
  }
}
