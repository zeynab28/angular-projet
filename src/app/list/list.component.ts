import { Component, OnInit } from '@angular/core';
import { ListeService } from '../liste.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listall = []
  constructor(private _at:ListeService) { }
  
  ngOnInit() {
    this._at. getListeall()
    .subscribe
    (
      res => this.listall =res,
      error => console.log(error)
     
    )
  }
  }


