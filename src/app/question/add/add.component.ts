import { Component, OnInit } from '@angular/core';
import {Question} from "../model/question";
import {Option} from "../model/option";
import {QuestionService} from "../../service/question.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material";
import {ProgressDialogComponent} from "../../dialog/progress-dialog/progress-dialog.component";
import {MessageDialogComponent} from "../../dialog/message-dialog/message-dialog.component";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  private question: Question;
  private questionService: QuestionService;

  private errorText = "";

  constructor(qs: QuestionService,  public dialog: MatDialog) {
    this.questionService = qs;
  }

  openDialog() {
    this.dialog.open(ProgressDialogComponent, {
      data: {

      },
      disableClose:true
    });
  }

  ngOnInit() {
    this.initQuestion();
  }

  initQuestion(){
    this.question = new Question;
    for (let i=0; i<4; i++){
      let option: Option = new Option;
      this.question.options.push(option);
    }
  }

  isAllOptionFiled(){
    for (let i=0; i<this.question.options.length; i++){
      if (!this.question.options[i].optionEnglish){
        console.log(this.question.options[i].optionEnglish);
        return false;
      }
    }
    return true;
  }

  openMessageDialog(message: string): void {
    let dialogRef = this.dialog.open(MessageDialogComponent, {
      data: { message: message}
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
    });
  }

  sendQuestionToServer(){
    this.errorText = "";
    if (!this.isAllOptionFiled()){
      this.errorText = "Please fill all options";
      return;
    }
    this.openDialog();
    this.questionService.sendQuestion(this.question).subscribe(
      data => {
        this.dialog.closeAll();
        console.log('Response:', data['result']);
        this.openMessageDialog('Question successfully submitted');
        this.question = null;
        this.errorText = "";
        this.initQuestion();
      },
      (err: HttpErrorResponse) => {
        this.dialog.closeAll();
        if (err.error instanceof Error) {
          this.errorText = 'An error occurred:'+ err.error.message;
          console.log('An error occurred:', err.error.message);
        } else {
          this.errorText = `Backend returned code ${err.status}, body was: ${err.error}`;
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
    // this.openMessageDialog('Question successfully submitted');
  }

}
