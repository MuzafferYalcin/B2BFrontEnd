import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }
  baseUrl : string = "https://localhost:7220/api/Order/"


  getById(id : number){
    return this.http.get(this.baseUrl+"getById/"+id);
  }

  getList(){
    return this.http.get(this.baseUrl+"getList");
  }

  getByCustomerId(customerid : number){
    return this.http.get(this.baseUrl+"getByCustomerId/"+customerid);
  }




}
