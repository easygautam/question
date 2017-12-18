import { Injectable } from '@angular/core';
import {NetworkService} from "./network.service";
import {Question} from "../question/model/question";
import {Constant} from "../constant";
import {HttpErrorResponse, HttpParams} from "@angular/common/http";

@Injectable()
export class QuestionService {

  private network: NetworkService;
  constructor(net: NetworkService) {
    this.network = net;
  }

  public sendQuestion(question: Question){
    const url = Constant.BASE_URL + "question/new";
    const body = {
      question: question.question,
      answer: question.answer.optionEnglish,
      options: [

      ]
    };
    for (let i = 0; i < question.options.length; i++){
      body.options.push(question.options[i].optionEnglish);
    }
    return this.network.post(url, body);
  }

  public getAllQuestion(){
    const url = Constant.BASE_URL + "question/";
    let params = new HttpParams();
    return this.network.get(url, params);
  }

}
