import {Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

import {ApiService} from '../../services/api/api.service';
import {IHeader} from './header.component.interface';
import {SetSecondaryBarMessageService} from '../../services/set-secondary-bar-message/set-secondary-bar-message.service';
import {DataService} from '../../services/data-service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements IHeader, OnInit {
  @Input()
  appHeaderAppTitle: string;

  @ViewChild('searchParty') input: ElementRef;

  public partyId: number;
  private apiService: ApiService;
  private setSecondaryBarMessage: SetSecondaryBarMessageService;
  private dataService: DataService;
  private router: Router;

  constructor(apiService: ApiService, setSecondaryBar: SetSecondaryBarMessageService, dataService: DataService, router: Router) {
    this.apiService = apiService;
    this.setSecondaryBarMessage = setSecondaryBar;
    this.dataService = dataService;
    this.router = router;
  }

  public ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.partyId = data.partyId;
    });
  }

  public goHome(): void {
    this.dataService.clearData();
    this.router.navigate(['/']);
  }

  public findParty(event: Event): void {
    event.preventDefault();
    const findPartyId = this.getInputValue();

    this.apiService.findParty('/api/party', findPartyId)
      .subscribe(
        result => {
          this.router.navigate(['/party/' + findPartyId]);
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
