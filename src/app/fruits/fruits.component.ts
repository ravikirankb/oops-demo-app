import { Component, OnInit } from '@angular/core';
import { FruitData } from '../models/fruit-data';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  constructor() { }

  fruitData: FruitData[] = [];

  ngOnInit(): void {
    this.fruitData=([
      new FruitData("Apple","appl","/assets/static/Images/apple-svgrepo-com.svg"),
      new FruitData("Banana","ban","/assets/static/Images/banana-svgrepo-com.svg"),
      new FruitData("Mango","mang","/assets/static/Images/mango-svgrepo-com.svg"),
      new FruitData("Orange","orng","/assets/static/Images/orange-svgrepo-com.svg"),
      new FruitData("Pineapple","pineap","/assets/static/Images/pineapple-svgrepo-com.svg")
    ]); 
  }

}
