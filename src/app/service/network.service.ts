import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class NetworkService {

  private http: HttpClient;

  constructor(h: HttpClient) {
    this.http = h;
  }

  getHeader(){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  public get(url, params: HttpParams){
    // let params = new HttpParams().set("paramName",paramValue).set("paramName2", paramValue2); //Create new HttpParams
    const req = this.http.get(url, {headers: this.getHeader(), params: params});
    return req;
  }

  public post(url, body, params?: HttpParams){
    // const body = {name: 'Brad'};
    const req = this.http.post(url, body, {headers: this.getHeader(), params: params});
    return req;
  }



}
