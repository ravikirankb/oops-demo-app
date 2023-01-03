import { STRING_TYPE } from "@angular/compiler";

export class FruitData{
   constructor(name:String,code:String,imageUrl:String){
      this.Name = name;
      this.code = code;
      this.imageUrl = imageUrl;
   }

   Name:String;
   code:String;
   imageUrl:String;
}