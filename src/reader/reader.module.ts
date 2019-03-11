import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReaderRoutingModule } from "./reader-routing.module";
import { MaterialModule } from "../material/material.module";

import { ReadingListComponent } from "./containers/reading-list/reading-list.component";

@NgModule({
  declarations: [ReadingListComponent],
  imports: [CommonModule, ReaderRoutingModule, MaterialModule]
})
export class ReaderModule {}
