import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/Types/RegisterForm';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: RegisterForm = {
    username: '',
    password: '',
    confirmPassword: '',
    role: 'USER'
  }
  response: any;
  isLoading: boolean = false;
  passwordMatch: boolean = true;
  constructor(private authService: AuthService) { }


  ngOnInit(): void {
  }

  registerSubmit() {
    console.log("Register Submit() is called.");
    this.isLoading= true;
    this.authService.Register(this.register).subscribe(result=>{
      this.response = result;
      console.log("APP User register with: "+ this.response);
    })
    this.isLoading= false;
  }
}
