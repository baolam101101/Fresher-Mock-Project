import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FoodService } from "src/app/services/food.service";
import { Food } from "src/app/shared/models/food";
import { CartService } from "src/app/services/cart.service";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  // foods: Food[] = [];
  foods: Observable<Food[]>;

  constructor(
    private router: Router,
    private foodService: FoodService,
    private cartService: CartService,
    activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {
    // this.foods = dataService.getListFoods();
    // activatedRoute.params.subscribe((params) => {
    //   if (params.searchTerm)
    //     this.foods = this.foodService.getAllFoodsBySearchTerm(
    //       params.searchTerm
    //     );
    //   else if (params.tag)
    //     this.foods = this.foodService.getAllFoodsByTag(params.tag);
    //   else this.foods = foodService.getAll();
    // });
  }
  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }

  searchFoodByName(searchFood) {
    if (searchFood) {
      this.foods = this.foodService.searchFood(searchFood);
    } else {
      this.foods = this.foodService.getAll();
    }
  }

  addToCart(food) {
    // console.log(food);
    this.cartService.addToCart(food);
    // this.router.navigateByUrl("/cart-page");
  }

  searchText = "";
}
