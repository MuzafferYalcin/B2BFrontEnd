import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService, JwtModule } from "@auth0/angular-jwt";
import { AuthService } from 'src/app/Services/auth.service';
import { DecodeService } from 'src/app/Services/decode.service';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  username : string =""
  constructor(private decodeService : DecodeService,private authService: AuthService,private router : Router
  ){}
  ngOnInit(): void {
    this.username = this.decodeService.getName();
    this.activeClass();
  }
  isAuth:boolean=this.authService.isAuthenticate();
  logout(){
    localStorage.removeItem("token");
    this.router.navigate(["/login"])
  }

  jwthelper : JwtHelperService = new JwtHelperService();

  activeClass(){
    var link = document.querySelectorAll(".sidemenu");
    link.forEach(e=>{
      e.addEventListener("click",()=>{
        link.forEach(element=>{
          element.classList.remove("active")
        })
        e.classList.add("active");
      })
    })
  }
}
