import { Observable } from "rxjs";

class Fruits{
     constructor(){
        this.fruits = new Array<Fruit>();
     }

     fruits:Fruit[];

     addFruit(fruit:Fruit):void { 
        this.fruits.push(fruit);
     }

     removeFruit():void{
        this.fruits.pop();
     }

     calculateWeight():Number{
        return 0;
     }

     getPrice():Number{
        return 0;
     }

     getCount():Number{
        return this.fruits.length;
     }

     getMaxWeight():Number{
         return 0;
     }

     getMaxSize():Number{
        return  0;
     }
}