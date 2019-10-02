import { Component, OnInit } from '@angular/core';
import { ListedepotService } from '../listedepot.service';
import { SweetAlert } from 'sweetalert/typings/core';
import * as _swal from 'sweetalert';
const swal: SweetAlert = _swal as any;

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
      async res => {console.log(res)
        await swal("Vous venez de faire un depot!", "You clicked the button!", "success");},
      err => console.log(err)
    )
  }
}
