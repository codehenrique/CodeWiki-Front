import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TutorialFormComponent } from "./tutorial-form/tutorial-form.component";
import { TutorialListComponent } from "./tutorial-list/tutorial-list.component";

const routes: Routes = [
  { path: "", component: TutorialListComponent },
  { path: "cadastro", component: TutorialFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule {}
