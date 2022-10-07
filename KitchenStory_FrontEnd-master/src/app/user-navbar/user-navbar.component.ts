import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  public totolItems: number = 0;
  isLoggedIn: boolean = false;
  constructor(private cartService: CartService, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    // console.log("IsLoggedIN: "+this.isLoggedIn);
    // console.log("Cart List: "+this.cartService.cartItemList());
  }

}
