import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },{
    path: 'question',
    loadChildren: 'app/question/question.module#QuestionModule',
    data: { preload: true }
  }/*,{
    path: 'view-leads',
    component: ViewLeadsComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
