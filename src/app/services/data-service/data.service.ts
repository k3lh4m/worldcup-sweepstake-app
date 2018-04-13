import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {IParty} from '../../interfaces/party.interface';
import {Party} from '../../classes/party.class';
import {Router} from '@angular/router';
import {ApiService} from '../api/api.service';

@Injectable()
export class DataService {
  private subject = new Subject<any>();
  private data: Party;
  private router: Router;
  private apiService: ApiService;

  constructor(router: Router, apiService: ApiService) {
    this.router = router;
    this.apiService = apiService;
  }

  public sendData(partyData: IParty) {
    this.data = new Party(partyData);
    this.subject.next(this.data);
  }

  public clearData() {
    this.subject.next({
      partyId: null
    });
  }

  public getData(): Observable<any> {
    return this.subject.asObservable();
  }

  public refreshData(): any {
    this.apiService.findParty('/api/party', this.data.partyId).subscribe((data) => {
      this.sendData(data);
    });
  }

}
