import { EventEmitter, Injectable } from '@angular/core';
import { Fruits } from '../models/fruits';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  
  public onFruitSelection: EventEmitter<string> = new EventEmitter<string>();

  public onAddToCart:EventEmitter<Fruits> = new EventEmitter<Fruits>();

  constructor() { 

  }
}
