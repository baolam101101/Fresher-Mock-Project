import { Injectable } from "@angular/core";
import { sample_foods, sample_tags } from "src/data";
import { Food } from "../shared/models/food";
import { Tag } from "../shared/models/Tag";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FoodService {
  constructor(private http: HttpClient) {}

  searchFood (foodName: string) : Observable<Food[]> {
    return this.http.get<Food[]>(`${environment.FOODS_BY_SEARCH_URL}/${foodName}`);
  }

  getAll(): Observable<Food[] > {
    return this.http.get<Food[]>(`${environment.FOODS_URL}`);
  }

   

  getAllTags(tag:string): Observable<Food[]> {
    return this.http.get<Food[]>(`${environment. FOODS_BY_TAG_URL}/${tag}`);
  }

  // getAllFoodsByTag(tag: string): Food[] {
  //   return tag === "All"
  //     ? this.getAll()
  //     : this.getAll().filter((food) => food.tags?.includes(tag));
  // }

  // getFoodById(foodId: string): Food {
  //   return this.getAll().find((food) => food.id == foodId) ?? new Food();
  // }
}
