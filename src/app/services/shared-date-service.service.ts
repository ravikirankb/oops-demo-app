import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  
  public onFruitSelection: EventEmitter<string> = new EventEmitter<string>();

  constructor() { 

  }
}
