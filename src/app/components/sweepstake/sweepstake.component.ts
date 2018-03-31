import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {DataService} from '../../services/data-service/data.service';
import {IParty} from '../../interfaces/party.interface';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../../services/api/api.service';

@Component({
  selector: 'app-sweepstake',
  templateUrl: './sweepstake.component.html',
  styleUrls: ['./sweepstake.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SweepstakeComponent implements OnInit {
  public partyData: IParty = null;
  private dataService: DataService;
  private subscription: any;
  private route: ActivatedRoute;
  private apiService: ApiService;

  constructor(dataService: DataService, activateRoute: ActivatedRoute, apiService: ApiService) {
    this.dataService = dataService;
    this.route = activateRoute;
    this.apiService = apiService;
  }

  public ngOnInit() {
    this.getPartyDataFromParams();
    this.setPartyData();
  }

  private setPartyData(): void {
    this.dataService.getData().subscribe((data) => {
      this.partyData = data;
    });
  }

  private getPartyDataFromParams(): void {
    this.subscription = this.route.params.subscribe((paramsId) => {
      this.getDataBasedOnParams(paramsId.id);
    });
  }

  private getDataBasedOnParams(paramId: number): void {
    this.apiService.findParty('/api/party', paramId).subscribe((paramsData) => {
      this.dataService.sendData(paramsData);
    });
  }

}
