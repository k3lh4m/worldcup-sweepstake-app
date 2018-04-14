import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {ActivatedRoute} from '@angular/router';
import {IParticipant} from '../../interfaces/party.interface';
import {DataService} from '../../services/data-service/data.service';
import {IGroupNames} from './group-names.component.interface';
import {ICompletePartyConfigButton} from '../complete-party/_interfaces/complete-party-button-config.interface';

@Component({
  selector: 'app-group-names',
  templateUrl: './group-names.component.html',
  styleUrls: ['./group-names.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GroupNamesComponent implements IGroupNames, OnInit {
  @Input()
  public appGroupNamesParticipants: IParticipant;

  @Input()
  public appGroupNamesIsComplete: boolean;

  @Input()
  public appGroupNamesNumberParticipants: number;

  public completeButtonConfig: ICompletePartyConfigButton;

  private apiService: ApiService;
  private router: ActivatedRoute;
  private dataService: DataService;
  private paramsId: string;

  constructor(apiService: ApiService, router: ActivatedRoute, dataService: DataService) {
    this.apiService = apiService;
    this.router = router;
    this.dataService = dataService;
  }

  ngOnInit() {
    this.setCompletePartyButtonConfig();
  }

  public minimumParticipants(): boolean {
    return this.appGroupNamesNumberParticipants >= 8 && !this.appGroupNamesIsComplete;
  }

  public canAddNewName(): boolean {
    return this.appGroupNamesNumberParticipants <= 31 && !this.appGroupNamesIsComplete;
  }

  private setCompletePartyButtonConfig(): void {
    this.completeButtonConfig = {
      label: 'Complete Party',
      isCompleted: this.appGroupNamesIsComplete,
      action: () => {
        const routerParams = this.router.params;

        routerParams.subscribe((params) => {
          this.paramsId = params.id;
        });

        const apiLink =  `/api/party/${this.paramsId}/?completedParty=${!this.appGroupNamesIsComplete}`;

        this.apiService.partyCompleted(apiLink, !this.appGroupNamesIsComplete).subscribe(() => {
          this.dataService.refreshData();
        });
      }
    };
  }
}
