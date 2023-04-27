import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CartService } from "src/app/services/cart.service";
import { Cart } from "src/app/shared/models/Cart";
import { CartItem } from "src/app/shared/models/CartItem";
import { Food } from "src/app/shared/models/Food";
import { sample_foods } from "src/data";
import { Router } from "@angular/router";
import { UserService } from 'src/app/services/user.service';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  // order:Order = new Order();
  // checkoutForm!: FormGroup;
  cart!: Cart;
  username: String;
  address: String;

  constructor(
    private userService: UserService,
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


  ngOnInit(): void { 
    this.username = this.userService.currentUser.name;
    this.address = this.userService.currentUser.address;
  }
  //   let {name, address} = this.userService.currentUser;
  //   this.checkoutForm = this.formBuilder.group({
  //     name:[name, Validators.required],
  //     address:[address, Validators.required]
  //   });
  // }

  // get fc(){
  //   return this.checkoutForm.controls;
  // }

  // createOrder(){
  //   if(this.checkoutForm.invalid){
  //     this.toastrService.warning('Please fill the inputs', 'Invalid Inputs');
  //     return;
  //   }

  //   this.order.name = this.fc.name.value;
  //   this.order.address = this.fc.address.value;

  //   console.log(this.order);
  // }


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