import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FoodItem } from '../Types/FoodItem';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FoodItemsService {


  private url = 'http://localhost:8989/admin';

  constructor(private httpClient: HttpClient) { }

  getFoodItemsFromService(): Observable<FoodItem[]> {
    return this.httpClient.get<FoodItem[]>(this.url + '/getProducts');
  }

  addProduct(product: any) {
    return this.httpClient.post(this.url + '/addProduct', product);
  }


  UpdatePassword(appUser: any){
    console.log("In food intem service: "+ appUser);
    return this.httpClient.post(this.url + '/update', appUser);
  }

  removeProduct(id:any):Observable<any>{
    return this.httpClient.delete(this.url+'/deleteProduct/'+id);
  }


}
