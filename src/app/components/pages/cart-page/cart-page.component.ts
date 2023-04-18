import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Dropdown } from "primeng/dropdown";
import { CartService } from "src/app/services/cart.service";
import { Cart } from "src/app/shared/models/Cart";
import { CartItem } from "src/app/shared/models/CartItem";
import { Food } from "src/app/shared/models/Food";
import { sample_foods } from "src/data";
import { Router } from "@angular/router";
import { NO_ERRORS_SCHEMA } from "@angular/compiler";

@Component({
  selector: "app-cart-page",
  templateUrl: "./cart-page.component.html",
  styleUrls: ["./cart-page.component.css"],
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  options: Dropdown[] = [];

  constructor(
    private cartService: CartService,
    activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  //quantity of pruduct
  // public inputValidator(event: any) {
  //   const pattern = /^([0-9])$/;
  //   if (!pattern.test(event.target.value)) {
  //     event.target.value = event.target.value.replace(/^([0-9])$/, "");
  //   }
  // }
 

    
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

  // foods = sample_foods;
  // selectedFood?: Food;

  // onSelect(food: Food): void {
  //   this.selectedFood = food;
  // }

  foods = sample_foods;
  selectedFood?: Food;

  onSelect(item: any): void {
    this.selectedFood = item.food;
  }
}
