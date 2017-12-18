import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UiModule} from "./ui/ui.module";
import {AppRoutingModule} from "./app-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import {ServiceModule} from "./service/service.module";
import {HttpClientModule} from "@angular/common/http";
import { QuestionComponent } from './question/question.component';
import {QuestionModule} from "./question/question.module";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { ProgressDialogComponent } from './dialog/progress-dialog/progress-dialog.component';
import { MessageDialogComponent } from './dialog/message-dialog/message-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProgressDialogComponent,
    MessageDialogComponent
  ],
  entryComponents: [
    ProgressDialogComponent,
    MessageDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    UiModule,
    QuestionModule,
    AppRoutingModule,
    ServiceModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
