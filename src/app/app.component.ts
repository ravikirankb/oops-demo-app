import { Component } from '@angular/core';
import { Mango } from './models/mango';
import { Fruit } from './models/fruit';
import { FruitData } from './models/fruit-data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oops-demo-app';

  mango = new Mango();

  ngngOnInit() {
     
  }

  // mango.showProperties();
}
