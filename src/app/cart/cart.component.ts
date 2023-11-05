import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Fruits } from '../models/fruits';
import { SharedDataService } from '../services/shared-date-service.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  loaded: string = "";
  fruits:Array<Fruits>;

  constructor(public sharedDataService: SharedDataService) {
    this.fruits = new Array<Fruits>();
    this.sharedDataService.onAddToCart.subscribe({
      next: (fruits: Fruits) => {
        console.log(`Received message`);
        if (fruits.fruits.length > 0) {
           this.fruits.push(fruits);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
           this.loaded = "loaded";
        }
      }
    })
  }

  ngOnInit(): void {

  }
}
