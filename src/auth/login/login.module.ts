import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { MaterialModule } from "../../material/material.module";
import { SharedModule } from "../shared/shared.module";

import { LoginComponent } from "./containers/login/login.component";

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, SharedModule, MaterialModule]
})
export class LoginModule {}
