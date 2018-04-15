import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {GroupNamesComponent} from './components/sweepstake/group-names/group-names.component';
import {NameComponent} from './components/sweepstake/group-names/name/name.component';
import {AddNewNameComponent} from './components/add-new-name/add-new-name.component';
import {CreateNewPartyComponent} from './components/create-new-party/create-new-party.component';
import {ApiService} from './services/api/api.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SetSecondaryBarMessageService} from './services/set-secondary-bar-message/set-secondary-bar-message.service';
import { SecondaryBarComponent } from './components/secondary-bar/secondary-bar.component';
import { SweepstakeComponent } from './components/sweepstake/sweepstake.component';
import {DataService} from './services/data-service/data.service';
import { PartySelectedInfoComponent } from './components/sweepstake/party-selected-info/party-selected-info.component';
import { CompletePartyComponent } from './components/complete-party/complete-party.component';
import { SweepstakeWrapperComponent } from './components/sweepstake-wrapper/sweepstake-wrapper.component';
import { PartyDataComponent } from './components/sweepstake/party-selected-info/party-data/party-data.component';
import { ParticipantTeamSelectionComponent } from './components/sweepstake/participant-team-selection/participant-team-selection.component';
import { FullWidthButtonComponent } from './components/full-width-button/full-width-button.component';
import { EditableNamesComponent } from './components/sweepstake/group-names/name/editable-names/editable-names.component';
import { OrderedNamesComponent } from './components/sweepstake/group-names/name/ordered-names/ordered-names.component';

const appRoutes: Routes = [
  { path: 'party/:id', component: SweepstakeWrapperComponent},
  { path: '', component: SweepstakeWrapperComponent},
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
    SweepstakeComponent,
    PartySelectedInfoComponent,
    CompletePartyComponent,
    SweepstakeWrapperComponent,
    PartyDataComponent,
    ParticipantTeamSelectionComponent,
    FullWidthButtonComponent,
    EditableNamesComponent,
    OrderedNamesComponent,
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
