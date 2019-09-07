import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthentificationService} from './authentification.service';
import { ListeService } from './liste.service';
import { JwtHelperService} from '@auth0/angular-jwt';
import { TokenInterceptorService } from './token-interceptor.service'
import { from } from 'rxjs';
import { ListeComponent } from './liste/liste.component';
import { CompteComponent } from './compte/compte.component';
import { ListecompteComponent } from './listecompte/listecompte.component';
import { DepotComponent } from './depot/depot.component';
import { ListedepotComponent } from './listedepot/listedepot.component';
import { AjoutpartenaireComponent } from './ajoutpartenaire/ajoutpartenaire.component';
import { EnvoiComponent } from './envoi/envoi.component';
import { ListetransactionComponent } from './listetransaction/listetransaction.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListeuserComponent } from './listeuser/listeuser.component';
import { PdfComponent } from './pdf/pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SpecialEventsComponent,
    ListeComponent,
    CompteComponent,
    ListecompteComponent,
    DepotComponent,
    ListedepotComponent,
    AjoutpartenaireComponent,
    EnvoiComponent,
    ListetransactionComponent,
    NavbarComponent,
    AcceuilComponent,
    ListeuserComponent,
    PdfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    
    AppRoutingModule
  ],
  providers: [AuthentificationService,JwtHelperService,ListeService,
    {
     provide: HTTP_INTERCEPTORS,
     useClass: TokenInterceptorService,
     multi: true
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
