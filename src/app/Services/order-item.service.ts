import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {
  baseUrl : string = "https://localhost:7220/api/OrderItem/";

  constructor(private http : HttpClient) { }

  getByOrderId(orderId : number){
    return this.http.get(this.baseUrl + "getListDto?orderid=" + orderId);
  }

}
