import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CartService } from "src/app/services/cart.service";
import { DataService } from "src/app/services/data.service";
import { UserService } from "src/app/services/user.service";
import { Cart } from "src/app/shared/models/Cart";
import { CartItem } from "src/app/shared/models/CartItem";
import { Food } from "src/app/shared/models/Food";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  foods: Food[] = [];
  cart!: Cart;
  constructor(
    private router: Router,
    dataService: DataService,
    private cartService: CartService,
    private userService: UserService
  ) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  options = [
    { label: "Log out", value: 0 },
    { label: "User information", value: 1 },
    { label: "Status", value: 2 },
  ];
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }

  selectOption(value: any) {
    // console.log(value);
    if (value === 0) {
      this.onLogout();
    } else if (value === 1) {
      this.router.navigate(["/userinfo"]);
    } else {
      this.router.navigate(["/order"]);
    }
  }

  onLogout() {
    this.userService.logout();
    this.router.navigate(['/']); // navigate to the login page
  }
}
