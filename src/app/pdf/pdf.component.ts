import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  downloadPDF(){
    console.log('downloading pdf ...');
     
const doc =new jsPDF();
 
doc.text('Hello world!', 15, 15);
 
doc.save('two-by-four.pdf')

}
}
