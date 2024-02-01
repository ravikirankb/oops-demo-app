export interface iFruit{
    fruitCode:string,
    fruitName:string,
    isSeasonal: boolean,
    seasonalDiscount?: number,
    seasonalDiscountType?: string,
    regularDiscount?: number,
    regularDiscountType?: string,
    weight: number,
    price:number,
    amount:number,
    priceAfterDiscount: number
}