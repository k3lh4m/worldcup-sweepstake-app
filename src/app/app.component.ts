import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public appTitle = 'World Cup Sweepstaker';
  public partyData = {};

  public ngOnInit(): void {

  }

  public setRetrievedPartyData(data) {
    this.partyData = data;
  }

}
