import { Component, OnInit } from '@angular/core';
import { ListedepotService} from '../listedepot.service';
@Component({
  selector: 'app-listedepot',
  templateUrl: './listedepot.component.html',
  styleUrls: ['./listedepot.component.css']
})
export class ListedepotComponent implements OnInit {
listedepot = []
  constructor(private _listedepotService: ListedepotService) { }

  ngOnInit() {
    this._listedepotService.getListedepot()
    .subscribe
    (
      res => this.listedepot =res,
      error => console.log(error)
     
    )
  }

}
