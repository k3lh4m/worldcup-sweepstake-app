import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SetSecondaryBarMessageService {
  private subject = new Subject();

  constructor() { }

  public setMessage(message: string): void {
    this.subject.next({
      text: message
    });
  }

  public getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
