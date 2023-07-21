import { Injectable } from "@angular/core";
import {  CanActivate, Router,CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { DecodeService } from "../Services/decode.service";
import { AuthService } from "../Services/auth.service";
import { Observable } from "rxjs";


@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private routes : Router,
    private decedoService : DecodeService,
    private authService : AuthService
    ){}

    canActivate(){
      if(this.authService.isAuthenticate()){
        return true;
      }
      this.routes.navigate(["/login"]);
      return false;
    }

    canActivateChild(
      childRoute: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let isAuthenticate = this.authService.isAuthenticate();
        if (isAuthenticate) {
          return true
        }
        this.routes.navigate(["/login"]);
      return false;
    }

}
