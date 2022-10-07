import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FoodItem } from '../Types/FoodItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  isDuplicate: boolean = false;
  //Act as obersvable and emit data at same time.
  //Emits the current value to all the subsribers at real time.

  constructor() { }

  getProduct() {
    return this.productList.asObservable();
  }//whoever and whenever this is being subscribed will get the data. i.e. product list

  addToCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
  }

  getTotalAmount(): number {
    //take price of each product and total it
    let grandTotol = 0;
    this.cartItemList.map((a: any) => {
      grandTotol += a.price;
    })
    return grandTotol;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) { //if product matches with product to be removed
        this.cartItemList.splice(index, 1);//removed the product
      }
    })
    this.productList.next(this.cartItemList);//pass the current cartItemList to productList
  }

  removeAllCartItem() {
    this.cartItemList = [];//empty the list
    this.productList.next(this.cartItemList);//and pass to productList after empting 
  }

  getItemListNumber(){
    return this.cartItemList.lenght;
  }

}
