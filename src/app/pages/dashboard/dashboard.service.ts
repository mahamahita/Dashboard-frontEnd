import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http:HttpClient) { }

Getcustomerinfo(){
  return this.http.get("http://localhost:8084/api/v1/customers");
}

Getinvoiceinfo(){  return this.http.get("http://localhost:8085/api/v1/invoices");}

Getproductinfo(){  return this.http.get("http://localhost:8083/products");}



}

