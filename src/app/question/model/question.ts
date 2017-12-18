import {Option} from "./option";

export class Question {

  private _id: number;
  private _question: string;
  private _options: Option[] = [];
  private _answer: Option = new Option;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get question(): string {
    return this._question;
  }

  set question(value: string) {
    this._question = value;
  }

  get options(): Option[] {
    return this._options;
  }

  set options(value: Option[]) {
    this._options = value;
  }


  get answer(): Option {
    return this._answer;
  }

  set answer(value: Option) {
    this._answer = value;
  }
}
