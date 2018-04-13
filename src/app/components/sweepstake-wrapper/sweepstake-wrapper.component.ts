import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {DataService} from '../../services/data-service/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sweepstake-wrapper',
  templateUrl: './sweepstake-wrapper.component.html',
  styleUrls: ['./sweepstake-wrapper.component.scss']
})
export class SweepstakeWrapperComponent implements OnInit {
  private dataService: DataService;
  private subscription: any;
  private route: ActivatedRoute;
  private apiService: ApiService;
  public partyData: any;

  constructor(dataService: DataService, activateRoute: ActivatedRoute, apiService: ApiService) {
    this.dataService = dataService;
    this.route = activateRoute;
    this.apiService = apiService;
  }

  public ngOnInit() {
    this.getPartyDataFromParams();
    this.getPartyData();
  }

  private getPartyData(): void {
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
