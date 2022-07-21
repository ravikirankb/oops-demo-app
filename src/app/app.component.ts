import { Component } from '@angular/core';
import { Mango } from './models/mango';
import { Fruit } from './models/fruit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oops-demo-app';

  mango = new Mango();

  Fruit f = new Mango();
}
