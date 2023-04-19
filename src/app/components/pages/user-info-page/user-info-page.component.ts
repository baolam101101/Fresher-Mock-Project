import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/shared/models/User";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-user-info-page",
  templateUrl: "./user-info-page.component.html",
  styleUrls: ["./user-info-page.component.css"],
})
export class UserInfoPageComponent {
  users: User;
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
    
    // activatedRoute.params.subscribe((params) => {
    //   if (params.id) this.user = userService.getUserId(params.id);
    // });
  }
  ngOnInit(): void {}
 
}
