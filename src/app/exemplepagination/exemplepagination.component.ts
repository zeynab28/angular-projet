import { Component, OnInit,ViewChild } from '@angular/core';
import { ExempleserviceService } from '../exempleservice.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface Prestataire {
  id: number;
  rs: string;
  ninea: string;
  
  }

@Component({
  selector: 'app-exemplepagination',
  templateUrl: './exemplepagination.component.html',
  styleUrls: ['./exemplepagination.component.css']
})
export class ExemplepaginationComponent implements OnInit {
  displayedColumns: string[] = ['id', 'rs', 'ninea'];
  dataSource: MatTableDataSource<Prestataire>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
prestataire = []
  constructor(private _exmple: ExempleserviceService) { }

  ngOnInit() {
    this. _exmple.getEntreprise()
.subscribe(
res => {
this.prestataire= res
this.dataSource = new MatTableDataSource(this.prestataire);
this.dataSource.paginator = this.paginator;
this.dataSource.sort = this.sort;
},
err => console.log(err),
)
}
applyFilter(filterValue: string) {
this.dataSource.filter = filterValue.trim().toLowerCase();

if (this.dataSource.paginator) {
this.dataSource.paginator.firstPage();
  }

}
}
