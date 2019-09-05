import { Component, OnInit } from '@angular/core';
import { ListedepotService } from '../listedepot.service';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {

  ajoutDepotData= {}
  constructor(private _depot: ListedepotService) { }

  ngOnInit() {
  }
  ajoutDepot(){
    
    this._depot.ajoutDepot(this.ajoutDepotData)
    .subscribe(
      res => {console.log(res)},
      err => console.log(err)
    )
  }
}
