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
import { CartItemsComponent } from '../cart-items/cart-items.component';

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
      if(this.fruits.length >0 ){
         this.fruits.forEach(fr=> {
              let fruitFound:iFruit= this.cart_fruits.find(f => f.fruitCode == fr.fruitCode)!;
              if (fruitFound != undefined){
                delete this.cart_fruits[this.cart_fruits.findIndex(c => c.fruitCode == fruitFound?.fruitCode)];
                this.cart_fruits.push(fr.getFruitInfo());
              }
              else{
                this.cart_fruits.push(fr.getFruitInfo());
              }              
         });
         console.log(this.cart_fruits);

         let totalPrice:number = 0;
         this.cart_fruits.forEach(element => {
           totalPrice = totalPrice + element.price;
         });

         let totalDiscountPrice:number = 0;
         this.cart_fruits.forEach(element => {
           totalDiscountPrice = totalDiscountPrice + element.priceAfterDiscount;
         });     

         this.dialog.open(CartItemsComponent, {
           data: {
             fruits: this.cart_fruits,
             totalPrice: totalPrice,
             totalDiscountPrice: totalDiscountPrice,
             invoiceNumber: Math.floor(1000 + Math.random() * 9000).toString(),
             invoiceDate: new Date().toLocaleDateString()
           },
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
