import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TutorialRoutingModule } from "./tutorial-routing.module";
import { TutorialFormComponent } from "./tutorial-form/tutorial-form.component";
import { TutorialListComponent } from "./tutorial-list/tutorial-list.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TutorialFormComponent, TutorialListComponent],
  imports: [CommonModule, TutorialRoutingModule, ReactiveFormsModule],
  exports: [TutorialFormComponent, TutorialListComponent]
})
export class TutorialModule {}
