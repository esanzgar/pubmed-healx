import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserAuthenticatedGuard } from "../auth/shared/guards/user-authenticated.guard";

import { ReadingListComponent } from "./containers/reading-list/reading-list.component";

const routes: Routes = [
  {
    path: "",
    canActivate: [UserAuthenticatedGuard],
    component: ReadingListComponent
  },
  {
    path: ":id",
    canActivate: [UserAuthenticatedGuard],
    component: ReadingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReaderRoutingModule {}
