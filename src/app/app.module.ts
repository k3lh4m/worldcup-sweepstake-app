import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {GroupNamesComponent} from './components/group-names/group-names.component';
import {NameComponent} from './components/name/name.component';
import {AddNewNameComponent} from './components/add-new-name/add-new-name.component';
import {CreateNewPartyComponent} from './components/create-new-party/create-new-party.component';
import {ApiService} from './services/api/api.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SetSecondaryBarMessageService} from './services/set-secondary-bar-message/set-secondary-bar-message.service';
import { SecondaryBarComponent } from './components/secondary-bar/secondary-bar.component';
import { SweepstakeComponent } from './components/sweepstake/sweepstake.component';
import {DataService} from './services/data-service/data.service';

const appRoutes: Routes = [
  { path: 'party/:id', component: SweepstakeComponent},
  { path: '', component: SweepstakeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GroupNamesComponent,
    NameComponent,
    AddNewNameComponent,
    CreateNewPartyComponent,
    SecondaryBarComponent,
    SweepstakeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    AngularFontAwesomeModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [,
    ApiService,
    DataService,
    SetSecondaryBarMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
