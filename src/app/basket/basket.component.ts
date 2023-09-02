import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { share } from 'rxjs';
import {SharedDateServiceService} from '../services/shared-date-service.service'

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})

export class BasketComponent implements OnInit {

  fruit_class:String="";

  constructor(public sharedDataService: SharedDateServiceService) { 
    this.sharedDataService.onFruitSelection.subscribe({
      next: (fruit: string) => {          
          console.log(`Received message #${fruit}`);
          this.fruit_class = fruit;
      }
  })
  }

  ngOnInit(): void {
     
  }
}
