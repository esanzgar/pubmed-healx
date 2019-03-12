import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RegisterRoutingModule } from "./register-routing.module";
import { MaterialModule } from "../../material/material.module";
import { SharedModule } from "../shared/shared.module";

import { RegisterComponent } from "./containers/register/register.component";

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RegisterRoutingModule, SharedModule, MaterialModule]
})
export class RegisterModule {}
