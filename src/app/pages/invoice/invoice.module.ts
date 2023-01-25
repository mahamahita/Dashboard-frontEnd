import { NgModule } from '@angular/core';
import {CommonModule, JsonPipe} from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';
import { ListInvoiceComponent } from './list-invoice/list-invoice.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { DetailInvoiceComponent } from './detail-invoice/detail-invoice.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UpdateInvoiceComponent } from './update-invoice/update-invoice.component';
import {NgxPaginationModule} from "ngx-pagination";
import { AddInvoiceToFactureComponent } from './create-invoice/add-invoice-to-facture/add-invoice-to-facture.component';
import { AddProductToFactureComponent } from './create-invoice/add-product-to-facture/add-product-to-facture.component';
import { AddCustomerToFactureComponent } from './create-invoice/add-customer-to-facture/add-customer-to-facture.component';



@NgModule({
  declarations: [
    InvoiceComponent,
    ListInvoiceComponent,
    CreateInvoiceComponent,
    DetailInvoiceComponent,
    UpdateInvoiceComponent,
    AddInvoiceToFactureComponent,
    AddProductToFactureComponent,
    AddCustomerToFactureComponent,
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    CommonModule,

  ],
  providers: [
    { provide: JsonPipe }]
})
export class InvoiceModule { }
