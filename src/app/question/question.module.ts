import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import {QuestionRoutingModule} from "./question-routing.module";
import {UiModule} from "../ui/ui.module";
import { AllComponent } from './all/all.component';
import {QuestionComponent} from "./question.component";

@NgModule({
  imports: [
    CommonModule,
    QuestionRoutingModule,
    UiModule
  ],
  declarations: [QuestionComponent, AddComponent, AllComponent]
})
export class QuestionModule { }
