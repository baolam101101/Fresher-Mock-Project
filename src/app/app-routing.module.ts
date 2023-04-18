import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "./components/pages/login-page/login-page.component";
import { RegisterComponent } from "./components/pages/register/register.component";
import { CartPageComponent } from "./components/pages/cart-page/cart-page.component";
import { HomePageComponent } from "./components/pages/home-page/home-page.component";
import { DetailComponent } from "./components/pages/detail/detail.component";
import { UserInfoPageComponent } from "./components/pages/user-info-page/user-info-page.component";
import { AboutUsComponent } from "./components/pages/about-us/about-us.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "home", component: HomePageComponent },
  { path: "login", component: LoginPageComponent },
  { path: "food/:id", component: DetailComponent },
  { path: "register", component: RegisterComponent },
  { path: "cart-page", component: CartPageComponent },
  { path : "info-user" , component : UserInfoPageComponent},
  { path: "aboutus", component: AboutUsComponent},
  { path: 'tag/:tag', component: HomePageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
