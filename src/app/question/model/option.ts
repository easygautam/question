export class Option {

  private _id: number;
  private _optionEnglish: string;
  private _optionHindi: string;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get optionEnglish(): string {
    return this._optionEnglish;
  }

  set optionEnglish(value: string) {
    this._optionEnglish = value;
  }

  get optionHindi(): string {
    return this._optionHindi;
  }

  set optionHindi(value: string) {
    this._optionHindi = value;
  }
}
