import fruitsData from "../data/fruit_info.json"
import seasonalInfo from "../data/seasonalinfo.json"
import offers from "../data/offers.json"

export class Fruit{
    months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    fruitCode:string = "";
    weight:number = 0;
    name?:string = "";

    constructor(code:string,weight:number){
        this.fruitCode = code;
        console.log(this.fruitCode);
        this.weight = weight / 1000;
        this.name = this.readFruitInfo()?.name;
        console.log("fruit name is");
        console.log(this.name);
    }

    getPrice(): number {
        let isSeasonal: boolean = this.isSeasonal();
        let price:number = this.readFruitInfo()?.price ?? 0;
        let finalPrice = price;
        if (isSeasonal) {
           finalPrice = this.applySeasonalDiscount(price);
        }
  
        finalPrice = this.applyRegularDiscount(price);
  
        return finalPrice;
     }

     increaseWeight(weight:number){
           this.weight = this.weight * 1000;
           this.weight += weight;
           this.weight = this.weight / 1000;
     }
  
     private applyRegularDiscount(price:number):number{
        let regularDiscountData = this.getRegularOffers();
        let discount = regularDiscountData?.discount ?? 1;
        let mode = regularDiscountData?.discount_mode;
        let discountPrice:number = price;
        if (mode == "percent") {
           discountPrice = price - (price / discount);
        }
        else if (mode == "price") {
           discountPrice = price - discount;
        }
        return discountPrice;
     }
  
     private applySeasonalDiscount(price:number):number{
        let seasonalData = this.getSeasonalOffers();
        let discount = seasonalData?.discount ?? 1;
        let mode = seasonalData?.discount_mode;
        let discountPrice:number = price;
        if (mode == "percent") {
           discountPrice = price - (price / discount);
        }
        else if (mode == "price") {
           discountPrice = price - discount;
        }
        return discountPrice;
     }

     private isSeasonal(): boolean {
        const d = new Date();
        let data = this.readSeasonaldata(this.months[d.getMonth()]);
        return this.fruitCode in data;
     }
  
     private getSeasonalOffers() {
        switch (this.fruitCode) {
           case "appl":
              return null;
           case "mang":
              return offers.mang.seasonaloffers;
           case "pineap":
              return offers.pineap.seasonaloffers;
           case "orng":
              return offers.orng.seasonaloffers;
           case "ban":
              return null;
           default:
              return null
        }
     }
  
     private getRegularOffers() {
        switch (this.fruitCode) {
           case "appl":
              return offers.appl.regular;
           case "mang":
              return offers.mang.regular;
           case "pineap":
              return offers.pineap.regular;
           case "orng":
              return offers.orng.regular;
           case "ban":
              return offers.ban.regular;
           default:
              return null
        }
     }
  
     private readSeasonaldata(month: string) {
        switch (month) {
           case "JAN":
              return seasonalInfo["JAN"];
           case "FEB":
              return seasonalInfo["FEB"];
           case "MAR":
              return seasonalInfo["MAR"];
           case "APR":
              return seasonalInfo["APR"];
           case "MAY":
              return seasonalInfo["MAY"];
           case "JUN":
              return seasonalInfo["JUN"];
           case "JUL":
              return seasonalInfo["JUL"];
           case "AUG":
              return seasonalInfo["AUG"];
           case "SEP":
              return seasonalInfo["SEP"];
           case "OCT":
              return seasonalInfo["OCT"];
           case "NOV":
              return seasonalInfo["NOV"];
           case "DEC":
              return seasonalInfo["DEC"];
           default:
              return [];
        }
     }
  
     private readFruitInfo(){
        switch (this.fruitCode) {
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