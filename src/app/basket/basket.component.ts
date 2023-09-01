import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  fruit_class:string="";
  constructor() { }

  ngOnInit(): void {
    this.fruit_class ="";
  }
}
