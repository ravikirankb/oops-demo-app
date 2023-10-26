import { Observable } from "rxjs";
import { Fruit } from "./fruit";

export class Fruits {
   fruit?: any = new Object();

   constructor() {
      this.fruits = new Array<Fruit>();
   }

   fruits: Fruit[];

   addFruit(fruit: Fruit): void {
      this.fruits.push(fruit);
   }

   removeFruit(): void {
      this.fruits.pop();
   }

   clear():void{
      this.fruits.splice(0,this.fruits.length);
   }

   calculateWeight(): number {
      let weight:number =0;
      this.fruits.forEach(f =>{
          weight += f.weight;
      });

      return weight;
   }

   getPrice(): number {
      return 0;
   }

   getCount(): number {
      return this.fruits.length;
   }

   getMaxWeight(): number {
      return 0;
   }

   getMaxSize(): number {
      return 0;
   }

   isLocallyGrown(): boolean {
      return false;
   }

   isSeasonal(): boolean {
      return false;
   }

   hasSeasonalOffers(): boolean {
      return false;
   }
}