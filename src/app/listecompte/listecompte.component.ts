import { Component, OnInit } from '@angular/core';
import { ListecompteService} from '../listecompte.service';
@Component({
  selector: 'app-listecompte',
  templateUrl: './listecompte.component.html',
  styleUrls: ['./listecompte.component.css']
})
export class ListecompteComponent implements OnInit {
  listecompte = []
  constructor(private _listecompteService: ListecompteService) { }

  ngOnInit() {
    this._listecompteService.getListecompte()
    .subscribe
    (
      res => this.listecompte =res,
      error => console.log(error)
     
    )
  }

}
