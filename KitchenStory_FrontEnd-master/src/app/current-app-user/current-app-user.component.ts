import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-current-app-user',
  templateUrl: './current-app-user.component.html',
  styleUrls: ['./current-app-user.component.css']
})
export class CurrentAppUserComponent implements OnInit {

  isAdmin:boolean = false;

  constructor(private authService: AuthService) { }
  currentappUser='';
  ngOnInit(): void {
    this.currentappUser = this.authService.getRole();
    if(this.currentappUser =='admin'){
      this.isAdmin = true;
    }
  }
}
