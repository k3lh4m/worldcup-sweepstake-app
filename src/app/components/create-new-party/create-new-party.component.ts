import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-new-party',
  templateUrl: './create-new-party.component.html',
  styleUrls: ['./create-new-party.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateNewPartyComponent implements OnInit {
  private apiService: ApiService;
  private router: Router;

  constructor(apiService: ApiService, router: Router) {
    this.apiService = apiService;
    this.router = router;
  }

  ngOnInit() {
  }

  public createNewParty(): void {
    this.apiService.createParty('/api/createparty')
      .subscribe((data) => {
        this.router.navigate(['/party/' + data.partyId]);
      });
  }
}
