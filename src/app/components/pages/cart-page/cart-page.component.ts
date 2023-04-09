import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:Cart;
  constructor(private cartService:CartService, private foodService:FoodService) {
    let foods = foodService.getAll();
    cartService.addToCart(foods[1]);
    cartService.addToCart(foods[3]);
    cartService.addToCart(foods[5]);

    this.setCart();
  }

  ngOnInit(): void {

  }
  setCart(){
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeCart(cartItem.food.id);
    this.setCart();//instance load data
  }

  changQuantity(cartItem:CartItem,  quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.addQuantity(cartItem.food.id, quantity);
    this.setCart();//instance load data
  }

}
