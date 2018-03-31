import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {IParty} from '../../interfaces/party.interface';

@Injectable()
export class DataService {
  private subject = new Subject<any>();

  public sendData(partyData: IParty) {
    this.subject.next(partyData);
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
