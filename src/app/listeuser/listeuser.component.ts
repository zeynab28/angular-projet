import { Component, OnInit } from '@angular/core';
import { ListeService } from '../liste.service';
import {listuser} from './listuser';
import { from } from 'rxjs';

@Component({
  selector: 'app-listeuser',
  templateUrl: './listeuser.component.html',
  styleUrls: ['./listeuser.component.css']
})
export class ListeuserComponent implements OnInit {
listuser:listuser[];
  constructor(private _aut: ListeService) { }

  ngOnInit() {
    this._aut.getListUser()
    .subscribe
    (
      res => this.listuser =res,
      error => console.log(error)
     
    )
  }
  bloquage(id){

    this._aut.blok(id).subscribe(
      res=>{ console.log(res)
        this.ngOnInit();
      },
     
      error => console.log(error)
      );
  }
  
}
  
  




