import { NgModule } from "@angular/core";
import fruitsData from "../data/fruit_info.json"

export class Fruit {
    constructor(name: string, id: Number, type: String) {
        this.name = name;
        this.id = id;
        this.type = type;
        this.weight = this.getFruitWeight(name);
    }

    name: string;
    id: Number;
    type: String;
    weight: number;

    getFruitWeight(name: string): number {
        let data = this.readJsonData(name);
        return this.randomNumber(data?.weight[0] ?? 0, data?.weight[1] ?? 0);
    }

    getFruitMaxAvailableWeight(): number {
        let data = this.readJsonData(this.name);
        return data?.maxavailable ?? 0;
    }

    private randomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }

    private readJsonData(name: string) {
        switch (name) {
            case "appl":
                return fruitsData["appl"];
            case "mang":
                return fruitsData["mang"];
            case "pineap":
                return fruitsData["pineap"];
            case "orng":
                return fruitsData["orng"];
            case "ban":
                return fruitsData["ban"];
            default:
                return null
        }
    }
}