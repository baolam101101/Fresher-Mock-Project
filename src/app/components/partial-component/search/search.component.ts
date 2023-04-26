import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Observable } from "rxjs";
import { FoodService } from "src/app/services/food.service";
import { Food } from "src/app/shared/models/Food";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {


  @Output() newItemEvent = new EventEmitter<string>();
  
  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    
  }
  onEnter(event:any){
    this.newItemEvent.emit(event.target.value);
  }
  
  keyFunc(event:any){
    if(event.target.value == ''){
      this.newItemEvent.emit(event.target.value);
    }
  }
  
 
}
