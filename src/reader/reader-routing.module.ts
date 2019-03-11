import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ReadingListComponent } from "./containers/reading-list/reading-list.component";

const routes: Routes = [{ path: "", component: ReadingListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReaderRoutingModule {}
