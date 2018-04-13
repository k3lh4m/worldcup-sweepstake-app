import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {DataService} from '../../services/data-service/data.service';
import {ActivatedRoute} from '@angular/router';
import {IPartyCompleted} from './party-selected-info.component.interface';
import {ICompletePartyConfigButton} from '../complete-party/_interfaces/complete-party-button-config.interface';

@Component({
  selector: 'app-party-selected-info',
  templateUrl: './party-selected-info.component.html',
  styleUrls: ['./party-selected-info.component.scss']
})
export class PartySelectedInfoComponent implements IPartyCompleted, OnInit {
  @Input()
  public appPartySelectedIsCompleted: boolean;

  private completeButtonConfig: ICompletePartyConfigButton;
  private apiService: ApiService;
  private router: ActivatedRoute;
  private dataService: DataService;
  private paramsId: number;

  constructor(apiService: ApiService, router: ActivatedRoute, dataService: DataService) {
    this.apiService = apiService;
    this.router = router;
    this.dataService = dataService;
  }

  ngOnInit() {
    this.setCompletePartyButtonConfig();
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

        const apiLink =  `/api/party/${this.paramsId}/?completedParty=${!this.appPartySelectedIsCompleted}`;

        this.apiService.partyCompleted(apiLink, !this.appPartySelectedIsCompleted).subscribe(() => {
          this.dataService.refreshData();
        });
      }
    };
  }
}
