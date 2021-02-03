import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService, private router: Router) { }

  errorMessages = [];
  message = "";
  ngOnInit(): void {
  }

  login(){
    console.log("login");
    var message;
    const fd = new FormData;
    fd.append('email', $("#email").val());
    fd.append("password", $("#password").val());
    this.userService.userLogin(fd).subscribe(res=>{
    
      console.log(res);
      message = res;
      localStorage.setItem("user",JSON.stringify(message.user));
      this.router.navigateByUrl("admin");
      this.message = message.message;
    }, 
    error => {
      error.error.errors.forEach(element => {
        this.errorMessages.push(element);
      });
    }
    )
  }
}
