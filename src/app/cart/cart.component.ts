import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { Fruits } from '../models/fruits';
import { Fruit } from '../models/fruit';
import { SharedDataService } from '../services/shared-date-service.service'
import { isEmpty } from 'rxjs';
import {MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { iFruit } from '../interfaces/iFruit';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  loaded: string = "";
  fruits:Array<Fruit> = new Array<Fruit>();
  isEmpty:boolean = this.fruits.length == 0;

  cart_fruits: Array<iFruit> = new Array<iFruit>();

  constructor(
    public sharedDataService: SharedDataService,
    public dialog: MatDialog
    ) {
    this.sharedDataService.onAddToCart.subscribe({
      next: (addedFruit: any) => {
        console.log(addedFruit);
        console.log(`Received message`);
        if(addedFruit){
          let code = addedFruit.fruitcode;
          if(this.fruits.find(c => c.fruitCode == code) == undefined){
            this.fruits.push(new Fruit(addedFruit.fruitcode, addedFruit.weight));
          }
          else{
            let fruit:any = this.fruits.find(c => c.fruitCode == code);
            fruit?.increaseWeight(addedFruit.weight);
          }
          this.isEmpty = false;
          this.loaded ="loaded";
        }
      }
    })
  }

  ngOnInit(): void {

  }

  checkOutCart(event: any) {
      this.dialog.open(CartItemsDialogComponent, {
        data: {
          animal: 'panda',
        },
      });

      if(this.fruits.length >0 ){
         this.fruits.forEach(fruit=> {
               let isSeasonal:boolean = false;
               let seasonalDiscount:number = 0;
               let seasonalDiscountType:string = "";
               let regularDiscout:number = 0;
               let regularDiscountType:string = "";
               let weight:number=0;
               let price:number =0;

               this.cart_fruits.push({weight:0,price:0,priceAfterDiscount:0});
         });
      }
      else{
        alert("No fruits added to cart!")
      }
  }

  cancelOrder(event: any) {
     
  }
}

@Component({
  selector: 'cart-items-dialog',
  templateUrl: '../cart-items-dialog.html',
  standalone: true
})
export class CartItemsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
