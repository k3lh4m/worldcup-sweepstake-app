import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {GroupNamesComponent} from './components/group-names/group-names.component';
import {NameComponent} from './components/name/name.component';
import {AddNewNameComponent} from './components/add-new-name/add-new-name.component';
import {CreateNewPartyComponent} from './components/create-new-party/create-new-party.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {ApiService} from './services/api.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GroupNamesComponent,
    NameComponent,
    AddNewNameComponent,
    CreateNewPartyComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
