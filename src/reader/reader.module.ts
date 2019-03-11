import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";

import { firebaseAppConfig } from "../environments/environment";

import { ReaderRoutingModule } from "./reader-routing.module";
import { MaterialModule } from "../material/material.module";

import { ReadingListComponent } from "./containers/reading-list/reading-list.component";

@NgModule({
  declarations: [ReadingListComponent],
  imports: [
    CommonModule,
    ReaderRoutingModule,
    AngularFireModule.initializeApp(firebaseAppConfig),
    MaterialModule
  ]
})
export class ReaderModule {}
