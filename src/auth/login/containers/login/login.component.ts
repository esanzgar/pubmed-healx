import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../../shared/services/auth.service";

@Component({
  selector: "workout-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  error: string | null = null;

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}

  async login(form: FormGroup) {
    this.error = null;
    const { email, password } = form.value;

    try {
      await this._auth.signin(email, password);
      this._router.navigate(["/"]);
    } catch (error) {
      this.error = error.message;
    }
  }
}
