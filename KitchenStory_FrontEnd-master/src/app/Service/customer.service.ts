import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Types/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = 'http://localhost:8989';

  constructor(private httpClient: HttpClient) {

  }

  proceedToBuy(customer: Customer): Observable<any> {
    return this.httpClient.post<any>(this.url+'/user/purchase', customer);
  }

}
