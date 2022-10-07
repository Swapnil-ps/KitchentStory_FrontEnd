import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: any = [];
  public grandTotal: number = 0;
  public quantity: number = 0
  customer: any;
  isEmpty: boolean = false;
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.getProduct()
      .subscribe(res => {
        this.products = res;
        this.grandTotal = this.cartService.getTotalAmount();
      })
  }
  removeProduct(product: any) {
    this.cartService.removeCartItem(product);
  }

  proceedToBuy() {
    console.log("Proceed to buy");

    this.router.navigate(['proceedToBuy']);
  }
}
