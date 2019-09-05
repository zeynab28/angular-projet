import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListeComponent } from './liste/liste.component';
import { CompteComponent } from './compte/compte.component';
import { ListecompteComponent } from './listecompte/listecompte.component';
import { DepotComponent } from './depot/depot.component';
import { EnvoiComponent } from './envoi/envoi.component';
import { ListedepotComponent } from './listedepot/listedepot.component';
import { ListetransactionComponent } from './listetransaction/listetransaction.component';
import { AjoutpartenaireComponent } from './ajoutpartenaire/ajoutpartenaire.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  
  {
    path:"liste",
    component:ListeComponent
  },
  {
    path:"acceuil",
    component:ListeComponent
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
