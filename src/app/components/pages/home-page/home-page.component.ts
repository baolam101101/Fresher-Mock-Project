import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FoodService } from "src/app/services/food.service";
import { Food } from "src/app/shared/models/food";
import { CartService } from "src/app/services/cart.service";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit{
  food: Food[] = [];
  constructor(private router: Router, dataService: DataService,private foodService: FoodService,
    private cartService: CartService,
    activatedRoute: ActivatedRoute,) {
    this.food = dataService.getListFoods();
  }
  ngOnInit(): void {}
  options = [
    { label: "Log out", value: 0 },
    { label: "User information", value: 1 },
    { label: "Status", value: 2 },
  ];

  addToCart(food) {
    // console.log(food);
    this.cartService.addToCart(food);
    this.router.navigateByUrl("/cart-page");
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

  searchText = "";

}

  // foods: Food[] = [];
  // constructor(
  //   private foodService: FoodService,
  //   private cartService: CartService,
  //   activatedRoute: ActivatedRoute,
  //   private router: Router
  // ) {
  //   activatedRoute.params.subscribe((params) => {
  //     if (params.searchTerm)
  //       this.foods = this.foodService.getAllFoodsBySearchTerm(
  //         params.searchTerm
  //       );
  //     else if (params.tag)
  //       this.foods = this.foodService.getAllFoodsByTag(params.tag);
  //     else this.foods = foodService.getAll();
  //   });
  // }

  
