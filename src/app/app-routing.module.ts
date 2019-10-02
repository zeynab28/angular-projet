import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListeComponent } from './liste/liste.component';
import { HomeComponent } from './home/home.component';
import { CompteComponent } from './compte/compte.component';
import { ListecompteComponent } from './listecompte/listecompte.component';
import { DepotComponent } from './depot/depot.component';
import { EnvoiComponent } from './envoi/envoi.component';
import { ListedepotComponent } from './listedepot/listedepot.component';
import { ListetransactionComponent } from './listetransaction/listetransaction.component';
import { AjoutpartenaireComponent } from './ajoutpartenaire/ajoutpartenaire.component';
import { ListeuserComponent } from './listeuser/listeuser.component';
import { RetraitComponent } from './retrait/retrait.component';
import { ListComponent} from './list/list.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:"retrait",
    component:RetraitComponent
  },

  {
    path:"listeuser",
    component:ListeuserComponent
  },
  {
    path:"listall",
    component:ListComponent
  },
  {
    path:"liste",
    component:ListeComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"listetransaction",
    component:ListetransactionComponent
  },
  {
    path:"envoi",
    component:EnvoiComponent
  },
  {
    path:"ajoutpartenaire",
    component:AjoutpartenaireComponent
  },
  {
    path:"listedepot",
    component:ListedepotComponent
  },
  {
    path:"depot",
    component:DepotComponent
  },
  {
    path:"listecompte",
    component:ListecompteComponent
  },
  {
    path:"compte",
    component:CompteComponent
  },
  {
    path:"special",
    component:SpecialEventsComponent
  },
  {path:"login",
  component:LoginComponent
},
{
  path:"register",
  component:RegisterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
