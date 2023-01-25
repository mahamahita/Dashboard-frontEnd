import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customers } from './customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private ms_customer_Url = 'http://localhost:8888/MS-CUSTOMER/api/v1/customers';

  constructor(private http:HttpClient) { }

  getListCustomers():Observable<Customers[]>{
    return this.http.get<Customers[]>(`${this.ms_customer_Url}`);
  }

  getCustomersByID(id:number):Observable<Customers>{
    return this.http.get<Customers>(`${this.ms_customer_Url}/${id}`);
  }
  getCustomersByName(name:string):Observable<Customers>{
    return this.http.get<Customers>(`${this.ms_customer_Url}/${name}`);
  }
  addNewCustomer(customer:Customers):Observable<object>{
    return this.http.post(`${this.ms_customer_Url}`+'/save',customer);
  }
  editCustomer(customer:Customers):Observable<object>{
    return this.http.put(`${this.ms_customer_Url}`+'/update',customer);
  }
  deleteCustomer(id:number):Observable<object>{
    return this.http.delete(`${this.ms_customer_Url}/delete/${id}`);
  }
}
