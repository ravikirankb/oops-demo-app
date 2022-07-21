 export class Fruit{
    constructor(name:String,id:Number,type:String){
       this.name = name;
       this.id = id;
       this.type = type;
    }
    name:String;
    id: Number;
    type:String;

    isLocallyGrown():boolean{
       return false;
    }

    isSeasonal():boolean{
        return false;
    }

    hasSeasonalOffers():boolean{
        return false;
    }
}