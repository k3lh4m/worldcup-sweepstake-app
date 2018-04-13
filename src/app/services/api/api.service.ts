import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IParty} from '../../interfaces/party.interface';

@Injectable()
export class ApiService {
  private _http: HttpClient;
  private _httpHeaders = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(httpClient: HttpClient) {
    this._http = httpClient;
  }

  public createParty(url: string): Observable<IParty>  {
    return this._http.get<IParty>(url);
  }

  public findParty(url: string, partyId: number): Observable<IParty> {
    return this._http.get<IParty>(url + '?partyId=' + partyId);
  }

  public partyCompleted(url, condition) {
    return this._http.put(url, { partyComplete: condition }, this._httpHeaders);
  }

  public removeParticipant(url) {
    return this._http.delete(url);
  }

  public addParticipant(url: string, body: any) {
    return this._http.put(url, body, this._httpHeaders);
  }
}
