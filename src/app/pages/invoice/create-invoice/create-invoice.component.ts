import {Component, OnInit} from '@angular/core';
import {Invoice} from '../Invoice';
import {InvoiceService} from '../invoice.service';
import {ActivatedRoute, Router} from '@angular/router';

import {NbWindowService} from "@nebular/theme";
import {AddInvoiceToFactureComponent} from "./add-invoice-to-facture/add-invoice-to-facture.component";
import {AddCustomerToFactureComponent} from "./add-customer-to-facture/add-customer-to-facture.component";
import {AddProductToFactureComponent} from "./add-product-to-facture/add-product-to-facture.component";
import {Product} from "../product";


@Component({
  selector: 'ngx-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss'],
})
export class CreateInvoiceComponent implements OnInit {

  invoice: Invoice = new Invoice();

  product: Product;
  private addCustomerToFactureForm: any;


  constructor(private invoiceService: InvoiceService,
              private router: Router,
              private route: ActivatedRoute,
              private windowService: NbWindowService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      console.log(id);
    })
  }

  //add invoice
  createInvoice() {
    this.invoiceService.add(this.invoice).subscribe(data => {
      console.log(data);
      this.gotoInvoiceList();
    }),
      error => console.log(error);
  }

  onSubmit() {
    this.createInvoice();
    console.log("on submit***************");
  }

  gotoInvoiceList() {
    this.router.navigate(['pages/invoice/principale']);
  }

  addInvoiceToFacture() {
    this.windowService.open(AddInvoiceToFactureComponent, {title: `Add Invoice`});
  }

  addCustomerToFacture() {
    this.windowService.open(AddCustomerToFactureComponent, {title: `Add Customer`});
  }

  addProductToFacture() {
    this.windowService.open(AddProductToFactureComponent, {title: `add Product`});
  }
}
