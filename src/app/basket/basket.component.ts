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

  fruit_class: String = "";
  fruitcount: number = 0;
  fruits: Fruits;

  constructor(public sharedDataService: SharedDataService) {
    this.fruits = new Fruits();
    this.sharedDataService.onFruitSelection.subscribe({
      next: (fruit: string) => {
        console.log(`Received message #${fruit}`);

        this.setFruitData(fruit);
        this.addFruitToBasket(fruit);
      }
    })
  }

  addFruitToBasket(_fruit: string) {
    this.fruits.addFruit(new Fruit(_fruit, 1, ""));
    this.setFruitCount();
  }

  setFruitData(fruit: string) {
    if (this.fruit_class == "") {
      this.fruit_class = fruit;
      return;
    }

    if (this.fruit_class != fruit) {
      this.fruits.clear();
      this.fruit_class = fruit
    }
  }

  removeFruit(event: any) {
    this.fruits.removeFruit();
    this.setFruitCount();
  }

  setFruitCount() {
    this.fruitcount = this.fruits.getCount();

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
