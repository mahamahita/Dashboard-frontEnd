import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Invoice} from './Invoice';
import {Product} from "./product";
import {Customer} from "./customer";

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {

  constructor(private http: HttpClient) {
  }

  ms_invoice_Url = 'http://localhost:8888/MS-INVOICE/api/v1';

  //findAll
  findAll() {
    return this.http.get<Invoice[]>(`${this.ms_invoice_Url}` + '/invoices');
  }

  //GET by Id: to populate fields in updateComponent
  getCoursById(id: number): Observable<Invoice> {
    return this.http.get<Invoice>(`${this.ms_invoice_Url}` + '/invoice/' + `${id}`);
  }

  add(invoice: Invoice): Observable<Object> {
    return this.http.post<Invoice>(`${this.ms_invoice_Url}` + '/addInvoice', invoice);
  }

  cx

  //delete invoice
  deleteInvoice(id: any): Observable<Object> {
    return this.http.delete(`${this.ms_invoice_Url}` + '/delete/' + `${id}`);
  }

  getByReference(searchedInvoice: string): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${this.ms_invoice_Url}/search/${searchedInvoice}`);
  }

  //update
  updateInvoice(id: number, invoice: Invoice) {
    return this.http.put<Invoice>(`${this.ms_invoice_Url}` + '/update/' + `${id}`, invoice);
  }

  //send data between componenets
  public product: Product;
  public invoice: Invoice;
  public customer: Customer;

  public getProduct(): Product {
    return this.product;
  }

  public setProduct(product: Product): void {
    this.product = product;
  }

  public getCustomer(): Customer {
    return this.customer;
  }

  public setCustomer(customer: Customer): any {
    this.customer = customer;
  }

  public getInvoice(): Invoice {
    return this.invoice;
  }

  public setInvoice(invoice: Invoice): any {
    this.invoice = invoice;
  }
}
