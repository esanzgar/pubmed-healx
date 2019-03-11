import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { SearchRoutingModule } from "./search-routing.module";
import { MaterialModule } from "../material/material.module";

import { SearchComponent } from "./containers/search/search.component";

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class SearchModule {}
