import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "../../material/material.module";

import { AuthService } from "./services/auth.service";
import { UserAuthenticatedGuard } from "./guards/user-authenticated.guard";

import { AuthFormComponent } from "./components/auth-form/auth-form.component";

@NgModule({
  declarations: [AuthFormComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [AuthFormComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AuthService, UserAuthenticatedGuard]
    };
  }
}
