import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent} from "./add/add.component";
import {QuestionComponent} from "./question.component";
import {AllComponent} from "./all/all.component";

const routes: Routes = [

  {
    path: 'question',
    component: QuestionComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all'
      },
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'all',
        component: AllComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
