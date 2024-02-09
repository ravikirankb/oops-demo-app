import fruitsData from "../data/fruit_info.json"
import seasonalInfo from "../data/seasonalinfo.json"
import offers from "../data/offers.json"
import { iFruit } from "../interfaces/iFruit";

export class Fruit {
   private months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
   fruitCode: string = "";
   weight: number = 0;
   name?: string = "";

   constructor(code: string, weight: number) {
      this.fruitCode = code;
      this.weight = weight / 1000;
      this.name = this.readFruitInfo()?.name;
   }

   private __getPrice(): number {
      let price: number = this.readFruitInfo()?.price ?? 0;
      return price;
   }

   getFruitInfo(): iFruit {
      let isSeasonal: boolean = this.__isSeasonal();
      let seasonalDiscount: number = 0;
      let seasonalDiscountType: string = "";
      let regularDiscout: number = 0;
      let regularDiscountType: string = "";
      let weight: number = this.weight;
      let price: number = Math.round((this.__getPrice() * weight + Number.EPSILON) * 100) / 100; 
      let amount: number = Math.round((this.__getPrice() + Number.EPSILON) * 100) / 100; 
      let priceAfterDiscount: number = 0;

      if (isSeasonal) {
         let seasonalInfo = this.getSeasonalOffers();
         seasonalDiscount = seasonalInfo?.discount ?? 0;
         seasonalDiscountType = seasonalInfo?.discount_mode ?? "";
      }

      let regularInfo = this.getRegularOffers();
      regularDiscout = regularInfo?.discount ?? 0;
      regularDiscountType = regularInfo?.discount_mode ?? "";

      priceAfterDiscount = this.applyRegularDiscount(price,regularDiscout,regularDiscountType);
      priceAfterDiscount = this.applySeasonalDiscount(priceAfterDiscount,seasonalDiscount,seasonalDiscountType);

      return {
         fruitCode: this.fruitCode,
         fruitName:this.name ?? "",
         isSeasonal: isSeasonal,
         seasonalDiscount: seasonalDiscount,
         seasonalDiscountType: seasonalDiscountType,
         regularDiscount: regularDiscout,
         regularDiscountType: regularDiscountType,
         weight: weight,
         price: price,
         amount:amount,
         priceAfterDiscount: priceAfterDiscount        
      }
   }

   increaseWeight(weight: number) {
      this.weight = this.weight * 1000;
      this.weight += weight;
      this.weight = this.weight / 1000;
   }

   private applyRegularDiscount(price: number, discount: number, type: string): number {
      let discountPrice: number = price;
      if (discount != 0) {
         if (type == "percent") {
            discountPrice = price - (price / discount);
         }
         else if (type == "price") {
            discountPrice = price - discount;
         }
      }
      
      return Math.round((discountPrice + Number.EPSILON) * 100) / 100;;
   }

   private applySeasonalDiscount(price: number, discount: number, type: string): number {
      let discountPrice: number = price;
      if (discount != 0) {
         if (type == "percent") {
            discountPrice = price - (price / discount);
         }
         else if (type == "price") {
            discountPrice = price - discount;
         }
      }

      return Math.round((discountPrice + Number.EPSILON) * 100) / 100;
   }

   private __isSeasonal(): boolean {
      const d = new Date();
      let data = this.readSeasonaldata(this.months[d.getMonth()]);
      return data.indexOf(this.fruitCode) > -1;
   }

   private getSeasonalOffers() {
      switch (this.fruitCode) {
         case "appl":
            return offers.appl.seasonaloffers;
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

   private readFruitInfo() {
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