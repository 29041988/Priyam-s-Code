import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class InvserveService {
  url : string = "http://10.111.70.21:3000/employee/";
  id = '99946783-9898-45cf-a5d4-9d771d7c891f';
  id2 = 'eb3d5081-fd09-4451-bbee-5056c169f138';
  id3 = '95d151d4-a9ba-480f-899e-d86f59632c5d';

  constructor(private httpclient: HttpClient) { }
  


  getData(): Observable <any> {
    
    return this.httpclient.get(this.url+this.id2);
  }
  getDataPlan(): Observable <any> {
    
    return this.httpclient.get(this.url+this.id);
  }
  getDataAn(): Observable <any> {
    
    return this.httpclient.get(this.url+this.id3);
  }
  

  postData(data): Observable<any>{
    return this.httpclient.post(this.url+this.id2,data);
  }
  postDataPlan(plan): Observable<any>{
    return this.httpclient.post(this.url+this.id,plan);
  }
  postDataAn(an): Observable<any>{
    return this.httpclient.post(this.url+this.id3,an);
  }

}
