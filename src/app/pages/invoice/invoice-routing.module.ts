import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice.component';
import { ListInvoiceComponent } from './list-invoice/list-invoice.component';
import {CreateInvoiceComponent} from "./create-invoice/create-invoice.component";
import {DetailInvoiceComponent} from "./detail-invoice/detail-invoice.component";
import {UpdateInvoiceComponent} from "./update-invoice/update-invoice.component";

const routes: Routes = [{
  path: '',
  component: InvoiceComponent,
  children: [
    {path: 'principale', component: ListInvoiceComponent},
    {path:'create-invoice',component: CreateInvoiceComponent},
    {path:'update-invoice/:id',component: UpdateInvoiceComponent},
    {path:'detail-invoice/:id',component: DetailInvoiceComponent}
  ],

  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
