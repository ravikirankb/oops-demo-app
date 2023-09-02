import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { isEmpty } from 'rxjs';
import { FruitData } from '../models/fruit-data';
import { SharedDateServiceService } from "../services/shared-date-service.service";

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})

export class FruitsComponent implements OnInit, AfterViewInit{

  ngAfterViewInit() {
    const fruit_bar: any = document.querySelector(".add-fruit-bar");
    const elementPosition: any = fruit_bar.getBoundingClientRect();
    console.log(elementPosition);

    this.basket_X = elementPosition.x;
    this.basket_Y = elementPosition.y;
  }

  constructor(private sharedDataService: SharedDateServiceService) { }

  fruitData: FruitData[] = [];
  opacity: Number = 1;
  code: String = "";
  sendToBasket: Boolean = false;
  basket_X:number = 0;
  basket_Y: number = 0;

  ngOnInit(): void {
    this.fruitData = ([
      new FruitData("Apple", "appl", "/assets/static/Images/apple-svgrepo-com.svg"),
      new FruitData("Banana", "ban", "/assets/static/Images/banana-svgrepo-com.svg"),
      new FruitData("Mango", "mang", "/assets/static/Images/mango-svgrepo-com.svg"),
      new FruitData("Orange", "orng", "/assets/static/Images/orange-svgrepo-com.svg"),
      new FruitData("Pineapple", "pineap", "/assets/static/Images/pineapple-svgrepo-com.svg")
    ]);
  }

  fruitSelect(event: any) {
    console.log(event);
    console.log(event.target.dataset);
    var code = event.target.dataset.code;
    if (this.code !== "") {
      if (this.code === code) {
        const x: number = event.x;
        const y: number = event.y;

        let x_B:number=0;
        let y_B:number=0;

        x_B = this.basket_X - 300;

        if(this.basket_Y > y){
          y_B = this.basket_Y - y;
        }
        else{
          y_B = 200 -y;         
        }

        console.log(x);
        console.log(y);

        document.documentElement.style.setProperty('--fruit-offset-x', 
        x +"px");
        document.documentElement.style.setProperty('--fruit-offset-y', y+"px");

        document.documentElement.style.setProperty('--basket-offset-x', 
        `-${x_B}px`);
        document.documentElement.style.setProperty('--basket-offset-y', y_B+"px");

        // second click case: place the fruit in the basket.
        this.sendToBasket = true;
        var that = this;
        setTimeout(function () {
          that.sharedDataService.onFruitSelection.emit(code);
          that.sendToBasket = false;
        }, 1200);
      }
      else {
        this.sendToBasket = false;
      }
    }
    
    this.code = code;
  }
}
