
import { FruitItem } from "./fruit-item";

export class Fruits {
   fruitCode: string = "";

   constructor(fruit: string) {
      this.fruitCode = fruit;
      this.fruits = new Array<FruitItem>();
   }

   fruits: FruitItem[];

   addFruit(fruit: FruitItem): void {
      let weight: number = this.calculateWeight();
      let maxavailableWeight = fruit.getFruitMaxAvailableWeight();
      if (weight < maxavailableWeight) {
         this.fruits.push(fruit);
      }
      else {
         alert("Fruit stock is exhausted!");
      }
   }

   removeFruit(): void {
      this.fruits.pop();
   }

   clear(): void {
      this.fruits.splice(0, this.fruits.length);
      this.fruitCode = "";
   }

   calculateWeight(): number {
      let weight: number = 0;
      this.fruits.forEach(f => {
         weight += f.weight;
      });

      return weight;
   }

   getCount(): number {
      return this.fruits.length;
   }
}