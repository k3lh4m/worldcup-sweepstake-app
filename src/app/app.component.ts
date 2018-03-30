import {Component, OnInit} from '@angular/core';
import {IParty} from './interfaces/party.interface';
import {DataService} from './services/data-service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public appTitle = 'World Cup Sweepstaker';
  public partyData: IParty;
  private dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  public ngOnInit(): void {
    this.getRetrievePartyDataFromParamsLink();
  }

  private getRetrievePartyDataFromParamsLink(): void {
    this.dataService.getData().subscribe((data: IParty) => {
      this.partyData = data;
    });
  }
}
