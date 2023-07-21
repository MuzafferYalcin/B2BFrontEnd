import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerDiscount } from '../_Models/customerDiscount';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl : string = "https://localhost:7220/api/Customer/"

  constructor(private http : HttpClient) { }

  add(customer : any){
    return this.http.post(this.baseUrl + "add",customer);
  }

  delete(id : number){
    return this.http.post(this.baseUrl + "delete/"+id,id);
  }

  update(customer : any){
    return this.http.post(this.baseUrl + "update",customer);
  }

  getList(){
    return this.http.get(this.baseUrl + "getList");
  }

  getListWithDiscount(){
    return this.http.get(this.baseUrl + "getListWithDiscount");
  }

  get(id: number){
    return this.http.get(this.baseUrl + "getCustomer/" + id);
  }
  addDiscount(customerDsicount : any){
    return this.http.post("https://localhost:7220/api/CustomerDiscount/add",customerDsicount);
  }
  GetByCustomerId(id : number){
    return this.http.get("https://localhost:7220/api/CustomerDiscount/getByCustomerId/"+id);
  }

  updateDiscount(discount : CustomerDiscount){
    return this.http.post("https://localhost:7220/api/CustomerDiscount/update",discount)
  }

}
