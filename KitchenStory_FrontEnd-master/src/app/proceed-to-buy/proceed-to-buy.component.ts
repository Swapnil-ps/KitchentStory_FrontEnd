import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../Service/cart.service';
import { CustomerService } from '../Service/customer.service';
import { Customer } from '../Types/Customer';

@Component({
  selector: 'app-proceed-to-buy',
  templateUrl: './proceed-to-buy.component.html',
  styleUrls: ['./proceed-to-buy.component.css']
})
export class ProceedToBuyComponent implements OnInit {

  constructor(private cartService: CartService, private router: Router, private customerService: CustomerService) { }

  // foodItemList: any[] =[];
  grandTotal: any;
  customer: Customer = {
    name: '',
    purchasedOf: 0,
    paymentStatus: 'NA',
    invoiceNumber: 'NA'
  }

  ngOnInit(): void {
    this.grandTotal = this.cartService.getTotalAmount();
    this.customer.purchasedOf = this.grandTotal;
    this.customer.invoiceNumber = (Math.random() + 1).toString(36).substring(7);
    this.customer.paymentStatus = 'Done';
  }
  pay() {
    this.customerService.proceedToBuy(this.customer).subscribe(result => {
      if (result != null) {
        this.router.navigate(['invoice']);
      }
    })
  }
  submit() {

  }

}
