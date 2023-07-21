import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class DecodeService {
  jwthelper : JwtHelperService = new JwtHelperService();
  rules : String[] = [];


  getName(){
    var token = localStorage.getItem("token");
    if(token){
      var decodeToken = this.jwthelper.decodeToken(token);
      var name = Object.keys(decodeToken).filter(p=>p.endsWith("/name"))[0]
      return decodeToken[name];
    }

  }

  getId() : number{
    var token = localStorage.getItem("token");
    if(token)
      var decodeToken = this.jwthelper.decodeToken(token);
    var name = Object.keys(decodeToken).filter(p=>p.endsWith("/nameidentifier"))[0]
    return +decodeToken[name];
  }

  getRoles(){
    var token = localStorage.getItem("token");
    if(token)
      var decodeToken = this.jwthelper.decodeToken(token);
    var name = Object.keys(decodeToken).filter(p=>p.endsWith("/role"))[0]
    for (let item of decodeToken[name]){
      this.rules.push(item);
    }
    console.log(this.rules)
    return this.rules;
  }
}
