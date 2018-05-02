import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ProductSelectionSavingsService {

  constructor(private http: HttpClient) { }
  url="../assets/data";
  
  getData() {
    return  this.http.get(this.url+'/db.json');
  }
  getTableData() {
    return  this.http.get(this.url+'/no-life-staging.json');
  }

 /* postData(products){
    return  this.http.post(this.url+'/postproduct',{products:products});     
  }*/
}
