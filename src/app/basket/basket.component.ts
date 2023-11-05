import { Component, HostBinding, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { share } from 'rxjs';
import { Fruit } from '../models/fruit';
import { Fruits } from '../models/fruits';
import { SharedDataService } from '../services/shared-date-service.service'

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})

export class BasketComponent implements OnInit {
  fruit_class: string = "";
  fruitcount: number = 0;
  fruits?: Fruits = undefined;
  weight: String = "";
  sendToCart: boolean = false;

  constructor(public sharedDataService: SharedDataService) {
    this.sharedDataService.onFruitSelection.subscribe({
      next: (fruit: string) => {
        console.log(`Received message #${fruit}`);

        this.setFruitData(fruit);

        if (this.fruits == undefined) {
          this.fruits = new Fruits(fruit);
        }

        this.addFruitToBasket(fruit);
      }
    })
  }

  addFruitToBasket(_fruit: string) {
    this.fruits?.addFruit(new Fruit(_fruit, 1, ""));
    this.setFruitCount();
    this.calculateWeight();
  }

  calculateWeight() {
    let weight: number = this.fruits?.calculateWeight() ?? 0;
    weight = weight / 1000;

    this.weight = weight == 0 ? "" : weight + " kg";
  }

  setFruitData(fruit: string) {
    if (this.fruit_class == "") {
      this.fruit_class = fruit;
      return;
    }

    if (this.fruit_class != fruit) {
      this.fruits?.clear();
      this.fruits = undefined;
      this.fruit_class = fruit;
    }
  }

  removeFruit(event: any) {
    this.fruits?.removeFruit();
    this.setFruitCount();
    this.calculateWeight();
  }

  addToCart(event: any) {
    const x: number = event.x;
    const y: number = event.y;

    document.documentElement.style.setProperty('--cart-offset-x',
      "-550px");

    document.documentElement.style.setProperty('--cart-offset-y',
      "0px");

    this.sendToCart = true;
    let that = this;
    setTimeout(function () {
      that.sendToCart = false;
      that.fruit_class = "";

      if (that.fruits != undefined) {

        that.sharedDataService.onAddToCart.emit(that.fruits);
        that.weight = "";

        that.fruits?.clear();
        that.fruits = undefined;

      }
    }, 1000);
  }

  setFruitCount() {
    this.fruitcount = this.fruits?.getCount() ?? 0;

    if (this.fruitcount == 0) {
      this.fruit_class = "";
      document.documentElement.style.setProperty('--fruit-count',
        "");
      return;
    }

    document.documentElement.style.setProperty('--fruit-count',
      `"${this.fruitcount.toString()}"`);
  }

  ngOnInit(): void {

  }
}
