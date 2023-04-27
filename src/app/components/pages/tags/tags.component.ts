import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { FoodService } from "src/app/services/food.service";
import { Food } from "src/app/shared/models/Food";
import { Tag } from "src/app/shared/models/Tag";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-tags",
  templateUrl: "./tags.component.html",
  styleUrls: ["./tags.component.css"],
})
export class TagsComponent implements OnInit {
  // tags: Tag[];
  tags: Observable<Tag[]>;

  @Output() newItemEvent = new EventEmitter<string>();

  // FoodService.getAllTags(tag: string): Observable<Food[]>

  constructor(
    private foodService: FoodService,
    private http: HttpClient,
    private router: Router,
    activatedRoute: ActivatedRoute
  ) {
    // this.tags = .foodService.getAllTags();
  }

  ngOnInit(): void {
    this.tags = this.foodService.getAllTags();
  }
}
