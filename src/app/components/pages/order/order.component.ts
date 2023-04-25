import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CartService } from "src/app/services/cart.service";
import { Cart } from "src/app/shared/models/Cart";
import { CartItem } from "src/app/shared/models/CartItem";
import { Food } from "src/app/shared/models/Food";
import { sample_foods } from "src/data";
import { Router } from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cart!: Cart;
  // options: Dropdown[];

  constructor(
    private cartService: CartService,
    activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
    const form = document.querySelector("form");
    const quantityInput = document.querySelector('#quantity') as HTMLInputElement;
    
    
  }


  ngOnInit(): void {}

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }

  selectOption(value: any) {
    console.log(value);
    if (value === 0) {
      this.router.navigate(["/logout"]);
    } else if (value === 1) {
      this.router.navigate(["/userInformation"]);
    } else {
      this.router.navigate(["/order"]);
    }
  }

  func() {
    console.log("s");
  }

  foods = sample_foods;
  selectedFood?: Food;

  onSelect(item: any): void {
    this.selectedFood = item.food;
  }
}