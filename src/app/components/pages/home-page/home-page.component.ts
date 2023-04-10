import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent {
  constructor(private router: Router) {}

  options = [
    { label: "Log out", value: 0 },
    { label: "User information", value: 1 },
    { label: "Status", value: 2 },
  ];

  selectOption(value:any) {
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
