import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl = "";
  submitted = false;
  user: any;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control("", [Validators.required, Validators.email]),
      password: this.fb.control("", [Validators.required]),
    });

    // this.auth.currentUser.subscribe((data) => (this.user = data));
  }

  // onSubmit() {
  //   this.submitted = true;

  //   if (this.loginForm.invalid) {
  //     return;
  //   }
  //   this.messageService.add({
  //     key: 'process',
  //     severity: 'info',
  //     summary: 'Waiting for Login',
  //     detail: '...',
  //     life: 4000,
  //   });
  //   // For call api login & Store token to localStorage
  //   this.accountServices.login(this.loginForm.value).subscribe({
  //     next: (res: any) => {
  //       this.user = res.result;
  //       this.accountServices.storeToken(res.result.token);
  //       this.accountServices.storeIdUser(res.result.user.id);
  //     },
  //     complete: () => {
  //       this.messageService.add({
  //         key: 'success',
  //         severity: 'success',
  //         summary: 'Successful',
  //         detail: 'Login Successful',
  //         life: 2000,
  //       });
  //       const event = {
  //         name: 'logout',
  //         isLogout: false,
  //         user: this.user,
  //       };
  //       this.eventManager.broadcast(event);
  //       this.auth.changeUser(this.user);
  //       this.router.navigate(['/home']);
  //     },
  //     error: (err) => {
  //       this.messageService.add({
  //         key: 'error',
  //         severity: 'error',
  //         summary: 'Fail',
  //         detail: `Login Fail. ${err.error.message}`,
  //         life: 2000,
  //       });
  //     },
  //   });
  // }

  // submit(){
  //   this.isSubmitted = true;
  //   if(this.loginForm.invalid) return;

  //   this.userService.login({email:this.fc.email.value,
  //      password: this.fc.password.value}).subscribe(() => {
  //        this.router.navigateByUrl(this.returnUrl);
  //      });
  // }

  submit() {}
}
