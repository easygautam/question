import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NetworkService} from "./network.service";
import {Question} from "../question/model/question";
import {QuestionService} from "./question.service";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    NetworkService,
    QuestionService
  ]
})
export class ServiceModule { }
