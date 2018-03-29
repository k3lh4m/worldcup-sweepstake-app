import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {IParty} from '../../interfaces/party.interface';
import {SetSecondaryBarMessageService} from '../../services/set-secondary-bar-message/set-secondary-bar-message.service';
import 'rxjs/add/operator/share';

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
  private setSecondaryBarMessage: SetSecondaryBarMessageService;

  constructor(apiService: ApiService, setSecondaryBar: SetSecondaryBarMessageService) {
    this.apiService = apiService;
    this.setSecondaryBarMessage = setSecondaryBar;
  }

  public setPartyId(party: IParty): void {
    this.partyId = party.partyId;
  }

  public findParty(event: Event): void {
    event.preventDefault();
    const findPartyId = this.getInputValue();

    this.apiService.findParty('/api/party', findPartyId)
      .subscribe(
        result => {
          this.appHeaderPartyData.emit(result);
          this.partyId = result.partyId;
        },
        error => {
          this.setSecondaryBarMessage.setMessage(error.error);
        }
      );
  }

  private getInputValue() {
    return this.input.nativeElement.value;
  }
}
