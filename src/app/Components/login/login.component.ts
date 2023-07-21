import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
    constructor
    (
      private authService : AuthService,
      private routes : Router
    ){}

    logindto : any = {}

    login(){
      this.authService.login(this.logindto).subscribe((next:any)=>{
        localStorage.setItem("token",next.data.token);
        alert("Giriş Başarılı");
        this.routes.navigate(["/"]);
      },err=>{
        alert(err.error);
      });
    }


}
