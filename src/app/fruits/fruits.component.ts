import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';
import { FruitData } from '../models/fruit-data';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  constructor() { }

  fruitData: FruitData[] = [];
  opacity:Number=1;
  code:String="";
  sendToBasket:Boolean=false;

  ngOnInit(): void {
    this.fruitData=([
      new FruitData("Apple","appl","/assets/static/Images/apple-svgrepo-com.svg"),
      new FruitData("Banana","ban","/assets/static/Images/banana-svgrepo-com.svg"),
      new FruitData("Mango","mang","/assets/static/Images/mango-svgrepo-com.svg"),
      new FruitData("Orange","orng","/assets/static/Images/orange-svgrepo-com.svg"),
      new FruitData("Pineapple","pineap","/assets/static/Images/pineapple-svgrepo-com.svg")
    ]); 
  }

  fruitSelect(event:any){
    console.log(event);
    console.log(event.target.dataset);
    var code = event.target.dataset.code;
    if(this.code !== ""){
        if(this.code === code){
          // second click case: place the fruit in the basket.
          this.sendToBasket = true;
          var that = this;
          setTimeout(function(){
             that.sendToBasket = false;
          },1200);
        } 
        else{
          this.sendToBasket = false;
        }
    }
    this.code = code;
    const b:any = document.querySelector(".add-fruit-bar");
    const r:any =b.getBoundingClientRect();
    b.left;
    console.log(r.right);
  }
}
