import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthentificationService} from './authentification.service';
import { ListeService } from './liste.service';
import { from } from 'rxjs';
import { ListeComponent } from './liste/liste.component';
import { CompteComponent } from './compte/compte.component';
import { ListecompteComponent } from './listecompte/listecompte.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SpecialEventsComponent,
    ListeComponent,
    CompteComponent,
    ListecompteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    
    AppRoutingModule
  ],
  providers: [AuthentificationService,ListeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
