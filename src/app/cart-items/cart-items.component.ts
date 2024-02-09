import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent
} from '@angular/material/dialog';

import { SharedDataService } from '../services/shared-date-service.service'

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})

export class CartItemsComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public sharedDataService: SharedDataService,) {
     }

  ngOnInit(): void {
  }

  completepay(event: any) {
     alert("Thank you for Shopping with us! Your payment is complete!");
     this.sharedDataService.onPaymentComplete.emit("complete");
  }

  close(){
  
  }

}
