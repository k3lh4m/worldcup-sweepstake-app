import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {IParty} from '../../interfaces/party.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  @Input()
  appHeaderAppTitle: string;

  @Output()
  appHeaderPartyData: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('searchParty') input: ElementRef;

  public partyId: number;
  private apiService: ApiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  public setPartyId(party: IParty): void {
    this.partyId = party.partyId;
  }

  public findParty(): void {
    const findPartyId = this.getInputValue();

    this.apiService.findParty('/api/party', findPartyId)
      .subscribe((data: IParty) => {
        this.appHeaderPartyData.emit(data);
        this.partyId = data.partyId;
      });
  }

  private getInputValue() {
    return this.input.nativeElement.value;
  }
}
