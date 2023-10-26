import { NgModule } from "@angular/core";
import fruitsData from "../data/fruit_info.json"

 export class Fruit{
    constructor(name:String,id:Number,type:String){
       this.name = name;
       this.id = id;
       this.type = type;
       this.weight = this.getFruitWeight(name);
    }
    
    name:String;
    id: Number;
    type:String;
    weight:number;

    getFruitWeight(name:String):number{
        return this.randomNumber(fruitsData.apl.weight[0],fruitsData.apl.weight[1]);
    }

    randomNumber(min:number, max:number) :number{
        return Math.random() * (max - min) + min;
    }
}