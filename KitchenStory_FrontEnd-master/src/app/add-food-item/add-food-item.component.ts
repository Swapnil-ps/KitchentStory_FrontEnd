import { Component, OnInit } from '@angular/core';
import { FoodItemsService } from '../Service/food-items.service';
import { FoodItem } from '../Types/FoodItem';

@Component({
  selector: 'app-add-food-item',
  templateUrl: './add-food-item.component.html',
  styleUrls: ['./add-food-item.component.css']
})
export class AddFoodItemComponent implements OnInit {

  product: FoodItem={
    foodName: '',
    price: 0,
    imgSource: ''
  }
  constructor(private foodItemsService: FoodItemsService) { }

  ngOnInit(): void {
  }
  isLoading: boolean= false;

  addProduct(){
    this.isLoading = true;
    this.foodItemsService.addProduct(this.product).subscribe({
      next: (Response: any) => console.log(Response), //next means: next data in the stream of data
      error: (err: any) => console.log(err),
      complete: () => console.log("complete")
    })
    alert("Product added");
    this.isLoading = false;
  }

}
