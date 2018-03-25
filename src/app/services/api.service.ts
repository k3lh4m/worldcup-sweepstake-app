
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ApiService {
  private _http: HttpClient;

  constructor(httpClient: HttpClient) {
    this._http = httpClient;
  }

  public createParty(url: string): Observable<any>  {
    return this._http.get<any>(url);
  }

  public findParty(url: string, partyId: number) {
    return this._http.get(url + '?partyId=' + partyId);
  }
}
