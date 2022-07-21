import { Fruit } from "./fruit";

export class Mango extends Fruit {
    constructor() {
        super("Mango", 1, "Mango");
    }

    showProperties(){
     console.log("show properties");
    }
}