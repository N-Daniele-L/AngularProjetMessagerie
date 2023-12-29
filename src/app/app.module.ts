import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HomeComponent } from './components/home/home.component';
import { EmployesComponent } from './components/employes/employes.component';
import { BureauxComponent } from './components/bureaux/bureaux.component';
import { MessagesComponent } from './components/messages/messages.component';
import { InfosComponent } from './components/infos/infos.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewemployeComponent } from './components/newemploye/newemploye.component';
import { EditemployeComponent } from './components/editemploye/editemploye.component';
import { NewbureauComponent } from './components/newbureau/newbureau.component';
import { EditbureauComponent } from './components/editbureau/editbureau.component';
import { EditmessageComponent } from './components/editmessage/editmessage.component';
import { NewmessageComponent } from './components/newmessage/newmessage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    EmployesComponent,
    BureauxComponent,
    MessagesComponent,
    InfosComponent,
    NewemployeComponent,
    EditemployeComponent,
    NewbureauComponent,
    EditbureauComponent,
    EditmessageComponent,
    NewmessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
