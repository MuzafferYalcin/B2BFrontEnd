import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../_Models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  baseUrl = "https://localhost:7220/api/Product/"

  getList(){
    return this.http.get(this.baseUrl+"getList");
  }

  getById(id : number){
    return this.http.get(this.baseUrl+"get/"+id);
  }

  add(product : any){
    return this.http.post(this.baseUrl+"add",product);
  }

  update(product : any){
    return this.http.post(this.baseUrl+"update",product)
  }

  delete(product : any){
    return this.http.post(this.baseUrl+"delete",product)
  }

}
