import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl : string = "https://localhost:7220/api/Auth/";

  constructor(private http : HttpClient){ }

  login(login : any){
    return this.http.post(this.baseUrl + "login",login);
  }

  register(register : any){
      return this.http.post(this.baseUrl + "register", register)
  }
  isAuthenticate(){
    if (localStorage.getItem("adminToken")) {
      return true;
    }
    return false;
  }

  update(user:any){
    return this.http.post("https://localhost:7220/api/Auth/updateUser",user);
  }

}
