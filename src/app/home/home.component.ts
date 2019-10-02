import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getUrl() {
    return "url('https://www.pxl.be/Assets/website/pxl_algemeen/afbeeldingen/pxl_beeld_geselecteerd.jpg')";
  }
}

