import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { firebaseAppConfig } from "../environments/environment";

import { SharedModule } from "./shared/shared.module";
import { MaterialModule } from "../material/material.module";

import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule.forRoot(),
    AngularFireModule.initializeApp(firebaseAppConfig),
    AngularFireAuthModule,
    MaterialModule
  ]
})
export class AuthModule {
  constructor(@Optional() @SkipSelf() parentModule: AuthModule) {
    if (parentModule) {
      throw new Error(
        "AuthModule is already loaded. Import it in the AppModule only"
      );
    }
  }
}
