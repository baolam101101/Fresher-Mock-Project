import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "src/app/services/data.service";
import { Food } from "src/app/shared/models/Food";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent{
  foods: Food[] = [];
  constructor(private router: Router, dataService: DataService)
  {}

  options = [
    { label: "Log out", value: 0 },
    { label: "User information", value: 1 },
    { label: "Status", value: 2 },
  ];
  
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
}


