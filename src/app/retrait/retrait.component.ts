import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { SweetAlert } from 'sweetalert/typings/core';
import  Swal from 'sweetalert2';
import * as swal from 'sweetalert';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.css']
})
export class RetraitComponent implements OnInit {
  public nomben;
  private INE;

  public toke;

   RetraitUserData = {coderetrait :null,codetransfert:null};
  constructor(private _auth: TransactionService){}
   ngOnInit(){
 
   }
   nomcomplet(){
     return this.nomben;
   }
  Retrait(){
    this._auth.testretrait(this.RetraitUserData ).subscribe(
      res => {console.log(res)   
            if(res.type=="envoi" ){
            Swal.fire({
              type: 'info',
              title: '<h2> Infos Transaction </h2><hr/>',
              html: 
                    '<h5>          Expediteur           </h5>'
                    +'<p> Nom : '+res.Expediteur+'<br>'
                    +'Montant envoyé: '+res.montant+'<br>'
                    +'Téléphone: '+res.tel+'<br>'
                    +'Date retrait : '+res.dateenvoi+'</p>'
                    +'<h5>        Bénéficiaire          </h5>'
                    +'<p> Nom : '+res.Beneficiaire+'<br>'
                    +'Code d\'envoi : '+res.code+'<br>'
                    +'Montant envoyé : '+res.montant+'<br>'
                    +'Numéro d\'identification : '+res.cni+'<br> </p>'
                    +'Date envoi : '+res.dateretrait+'</p>',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirmer le retrait'
              
            }).then((result) => {
              if (result.value) {
                Swal.fire(
                'Succés',
                'Transaction éffectué avec succés',
                'success'
               )}
              this.RetraitUserData.codetransfert=res.code;
               this.finalisons();
            })
     }else if(res.type=="retrait" ){
      Swal.fire(
        'Erreur lors de l enregistrement',
        'Veillez verifier le code entrée'+
        'NB : Un code de transfert ne peut pas etre utiliser deux fois',
        'error' 
      )}else{
      Swal.fire(
        'Echec ! ',
        'Le code saisi est incorecte. Vérifier à nouveau.',
        'error'
       )
     }}
      ,err =>{console.log(err) ;
        
      }
    )
  }
 
 
  finalisons(){
    this._auth.finaliser(this.RetraitUserData).subscribe(
      res => {console.log(res);

     }
      ,err =>{console.log(err)}
    )
  }
}
