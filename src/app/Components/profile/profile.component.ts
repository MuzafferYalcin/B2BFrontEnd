import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { DecodeService } from 'src/app/Services/decode.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userName=""
  userId = 0;

  constructor(private authService: AuthService,private decode: DecodeService ,private router : Router){}
  ngOnInit(): void {
    this.getUserId();
    this.getUserName();
  }


  getUserId(){
    this.userId =this.decode.getId();;
  }

  getUserName(){
    this.userName = this.decode.getName();
  }
  logout(){
    localStorage.removeItem("token");
    this.router.navigate(["/login"])
  }
  update(Form: NgForm){
    let user: any= {};
    user.id = this.decode.getId();
    user.name = this.userName;
    user.password = Form.value.password;
    user.newPassword = Form.value.newPassword;
    console.log(user)
    this.authService.update(user).subscribe((res:any)=>{
      alert("Kullanıcı bilgileri güncellendi. Tekrar giriş yapmalısınız!");
      this.logout();
    },err=>{
      alert(err.error);
    });
  }
}
