import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodItemsService } from '../Service/food-items.service';
import { AppUserModel } from '../Types/AppUserModel';

@Component({
  selector: 'app-update-credentials',
  templateUrl: './update-credentials.component.html',
  styleUrls: ['./update-credentials.component.css']
})
export class UpdateCredentialsComponent implements OnInit {

  appUser: AppUserModel = {
    username: '',
    password: ''
  }
  constructor(private foodItemService: FoodItemsService, private router: Router) { }

  ngOnInit(): void {
  }
  submit() {
    this.foodItemService.UpdatePassword(this.appUser).subscribe(result => {
      if (result != null)
        alert("Password Updated.");
      this.router.navigate(['']);
    })
  }

}
