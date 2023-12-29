import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BureauxComponent} from './components/bureaux/bureaux.component';
import {EmployesComponent} from './components/employes/employes.component';
import {MessagesComponent} from './components/messages/messages.component';
import {InfosComponent} from './components/infos/infos.component';
import {HomeComponent} from './components/home/home.component';
import {NewemployeComponent} from "./components/newemploye/newemploye.component";
import {EditemployeComponent} from "./components/editemploye/editemploye.component";
import {NewbureauComponent} from "./components/newbureau/newbureau.component";
import {EditbureauComponent} from "./components/editbureau/editbureau.component";
import {EditmessageComponent} from "./components/editmessage/editmessage.component";
import {NewmessageComponent} from "./components/newmessage/newmessage.component";

const routes: Routes = [
  {path: 'bureaux', component: BureauxComponent},
  {path: 'employes', component: EmployesComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'infos', component: InfosComponent},
  {path: 'newEmploye', component: NewemployeComponent},
  {path: 'editEmploye/:idEmploye' , component: EditemployeComponent},
  {path: 'newBureau', component: NewbureauComponent},
  {path: 'editBureau/:idBureau', component: EditbureauComponent},
  {path: 'newMessage' , component: NewmessageComponent},
  {path: 'editMessage/:idMess', component: EditmessageComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
