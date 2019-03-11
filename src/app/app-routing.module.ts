import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/search" },
  { path: "search", loadChildren: "../search/search.module#SearchModule" },
  { path: "reader", loadChildren: "../reader/reader.module#ReaderModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
