import { Injectable, OnInit } from "@angular/core";
import { sample_foods, sample_tags } from "src/data";
import { Food } from "../shared/models/food";
import { Tag } from "../shared/models/Tag";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class FoodService implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  searchFood(foodName: string): Observable<Food[]> {
    return this.http.get<Food[]>(
      `${environment.FOODS_BY_SEARCH_URL}/${foodName}`
    );
  }

  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(`${environment.FOODS_URL}`);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${environment.FOODS_TAGS_URL}`);
  }

  // getFoodsByTag(tagName: string) {
  //   return this.http.get<Food[]>(`${environment.FOODS_BY_TAG_URL}${tagName}`);
  // }

  getAllFoodsByTag(tagName: string): Observable<Food[]> {
    if (tagName === "All") {
      return this.getAll();
    } else {
      return this.http.get<Food[]>(`${environment.FOODS_TAGS_URL}/${tagName}`);
    }
  }

  // getFoodById(foodId: string): Food {
  //   return this.getAll().find((food) => food.id == foodId) ?? new Food();
  // }
}
