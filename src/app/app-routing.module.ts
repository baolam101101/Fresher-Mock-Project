import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "./components/pages/login-page/login-page.component";
import { RegisterComponent } from "./components/pages/register/register.component";
const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "login", component: LoginPageComponent },
  { path: "register", component: RegisterComponent },
<<<<<<< Updated upstream
=======
  { path: "home", component: HomePageComponent },
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
