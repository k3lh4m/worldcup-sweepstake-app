import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GroupNamesComponent } from './components/group-names/group-names.component';
import { NameComponent } from './components/name/name.component';
import { AddNewNameComponent } from './components/add-new-name/add-new-name.component';
import { CreateNewPartyComponent } from './components/create-new-party/create-new-party.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';


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
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
