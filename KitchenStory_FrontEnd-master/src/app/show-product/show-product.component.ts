import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CartService } from '../Service/cart.service';
import { FoodItemsService } from '../Service/food-items.service';
import { FoodItem } from '../Types/FoodItem';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  constructor(private foodService: FoodItemsService,
    private cartService: CartService,
    private authService: AuthService,
    private foodItemService: FoodItemsService) { }
  //Define FoodItems array
  foodItems: FoodItem[] = [];
  searchInput: string = '';
  appUser: String = '';
  isAdmin: boolean = false;
  isUser: boolean = false;
  currentappUser = '';

  ngOnInit(): void {
    this.foodService.getFoodItemsFromService()
      .subscribe(result => {
        // next: (response: FoodItem[]) => this.foodItems = response,
        if (result != null) {
          this.foodItems = result;
          // console.log(this.foodItems);
        }
      })
    this.currentappUser = this.authService.getRole();
    if (this.currentappUser == 'admin') {
      this.isAdmin = true;
    }
    else if (this.currentappUser == 'user') {
      this.isUser = true;
    }
  }

  addToCart(foodItem: FoodItem) {
    this.cartService.addToCart(foodItem);
  }
  removeProduct(id: any) {
    // console.log(id);
    this.foodItemService.removeProduct(id).subscribe(result=>{
      if(result!=null){
        alert("Proudct removed.")
      }
    });
  }
}
