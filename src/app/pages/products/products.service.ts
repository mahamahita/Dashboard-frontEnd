import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import{Products} from'./products'

 const baseURL= "http://localhost:8083/products";
@Injectable({
  providedIn: 'root'
})


export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getProductsList(): Observable<Products[]>{
return this.httpClient.get<Products[]>(baseURL)
 }

 createProduct(products:Products): Observable<Object>{
 return this.httpClient.post(`${baseURL}`,products);}

 getProductById(id: number): Observable<Products>{
    return this.httpClient.get<Products>(`${baseURL}/${id}`);
  }

updateProduct(id: number, product: Products): Observable<Object>{
return this.httpClient.put(`${baseURL}/${id}`,product);}


 deleteProduct(id: number): Observable<Object> {
    return this.httpClient.delete(`${baseURL}/${id}`);

  }

  getByDesignation(designation:string):Observable<Products[]>{
    return this.httpClient.get<Products[]>(`${baseURL}/getProductByDesignation/${designation}`);
  };
}

