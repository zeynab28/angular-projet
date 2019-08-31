import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListeComponent } from './liste/liste.component';
import { CompteComponent } from './compte/compte.component';
import { ListecompteComponent } from './listecompte/listecompte.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/events',
    pathMatch:'full'
  },
  
  {
    path:"liste",
    component:ListeComponent
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
