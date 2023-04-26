import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CartService } from "src/app/services/cart.service";
import { FoodService } from "src/app/services/food.service";
import { Food } from "src/app/shared/models/Food";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"],
})
export class DetailComponent implements OnInit {
  foods: Observable<Food[]>;
  food!: Food;
  constructor(
    activatedRoute: ActivatedRoute,
    foodService: FoodService,
    private cartService: CartService,
    private router: Router,
    private http: HttpClient
  ) {
    // activatedRoute.params.subscribe((params) => {
    //   if (params.id) this.food = foodService.getFoodById(params.id);
    // });
  }

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl("/cart-page");
  }
}
// export class DetailComponent implements OnInit {
//   food!: Food;
//   constructor(
//     activatedRoute: ActivatedRoute,
//     foodService: FoodService,
//     private cartService: CartService,
//     private router: Router,
//     private http: HttpClient
//   ) {
//     activatedRoute.params.subscribe((params) => {
//       if (params.id) this.food = foodService.getFoodById(params.id);
//     });
//   }

//   ngOnInit(): void {}

//   addToCart() {
//     this.cartService.addToCart(this.food);
//     this.router.navigateByUrl("/cart-page");
//   }
// }
