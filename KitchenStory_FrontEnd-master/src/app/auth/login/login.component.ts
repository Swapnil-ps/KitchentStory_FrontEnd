import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: any = {

    "username": '',
    "password": ''

  }
  responsedata: any;

  constructor(private authService: AuthService, private router: Router) {
    localStorage.clear();
  }


  ngOnInit(): void {
  }

  submit() {
    this.authService.Login(this.loginForm).subscribe(result => {
      if(result!=null){
        this.responsedata = result;
        localStorage.setItem('token', this.responsedata.jwtToken);
        this.router.navigate(['/']);

      }
    })
  }
}
