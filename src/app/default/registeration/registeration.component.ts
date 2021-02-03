import { Component, OnInit } from '@angular/core';
import { userModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
declare var $;

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  user = new userModel();
  message : any;
  errorMessages = [];

  registeration(){
    if($("#password").val() == $("#confirm-password").val()){
    var message;
    const formData =  new FormData;
    formData.append('name', $("#name").val());
    formData.append('email', $("#email").val());
    formData.append('password', $("#password").val());
    this.userService.userRegisteration(formData).subscribe(res=>{
      console.log(res);
      message = res;
      this.message = message.message;
    },
    error =>{
      error.error.errors.forEach(element=>{
        this.errorMessages.push(element);
      });
      
    });
  }else{
    this.message = "Password confirmation does not match";

  }
  } //fun


}
