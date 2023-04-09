import { Injectable } from "@angular/core";
import { Cart } from "../shared/models/Cart";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cart: Cart = new Cart();
  addToCart(food: Foods): void {
    let CartItem = this.cart.items.find((item) => item.food.id === food.id);
    if (CartItem) {
      this.changeQuantity(food.id, CartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new cartItem(food));
  }
  removeFormCart(foodId: number, quantity: number): void {
    this.cart.items = this.cart.items.filter((item) => item.food.id != foodId);
  }
  changeQuantity(quantity: number, foodId: number) {
    let cartItem = this.cart.items.find((item) => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity; 
  }
  getCart():Cart{
    return this.cart;
   }
}
