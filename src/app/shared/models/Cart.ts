import { CartItem } from "./CartItem";

export class Cart {
  // items: CartItem[] = [];
  // totalCount: number;

  // get totalPrice(): number {
  //   let totalPrice = 0;
  //   this.items.forEach((item) => {
  //     totalPrice += item.price;
  //   });
  //   return totalPrice;
  // }

  items:CartItem[] = [];
  totalPrice:number = 0;
  totalCount:number = 0;
}
