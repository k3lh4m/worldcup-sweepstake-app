import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {IParty} from '../../interfaces/party.interface';
import {Party} from '../../classes/party.class';

@Injectable()
export class DataService {
  private subject = new Subject<any>();
  private data: Party;

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

}
