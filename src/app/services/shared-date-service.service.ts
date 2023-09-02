import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDateServiceService {
  
  public onFruitSelection: EventEmitter<string> = new EventEmitter<string>();

  constructor() { 

  }
}
