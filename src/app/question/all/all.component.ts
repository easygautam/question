import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../../service/question.service";
import {Question} from "../model/question";
import {MatDialog} from "@angular/material";
import {HttpErrorResponse} from "@angular/common/http";
import {Option} from "../model/option";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  private questions: Question[] = [];
  private questionService: QuestionService;

  private dataArray: any[] = [];

  constructor(qs: QuestionService,  public dialog: MatDialog) {
    this.questionService = qs;
  }

  ngOnInit() {
    this.allQuestions();
  }

  allQuestions(){
    // this.openDialog();
    this.questionService.getAllQuestion()
      .subscribe(data => {
        console.log(data);
         let dataArray: any[] = data['result'];
        for (let i = 0; i < dataArray.length; i++){
          let questionOb = dataArray[i];
          let question: Question = new Question;
          question.question = questionOb['quest'];
          let ansOb = questionOb['ans'];
          let ans: Option = new Option;
          ans.id = ansOb['id'];
          ans.optionEnglish = ansOb['eng'];
          ans.optionHindi = ansOb['hindi'];
          question.answer = ans;
          let optionArray = questionOb['opt'];
          for (let j = 0; j < optionArray.length; j++){
            let optObj = optionArray[j];
            let opt: Option = new Option;
            opt.id = optObj['id'];
            opt.optionEnglish = optObj['eng'];
            opt.optionHindi = optObj['hindi'];
            question.options.push(opt);
          }
          this.questions.push(question);
        }
        console.log('Response:', this.questions.length);
      },
      (err: HttpErrorResponse) => {
        // this.dialog.closeAll();
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
  }


   deleteQuestion(question: Question){
    console.log("deleted "+question.question);
  }

}
