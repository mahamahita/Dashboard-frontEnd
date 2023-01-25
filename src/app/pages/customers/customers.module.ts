import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { HttpClientModule } from '@angular/common/http';
import { NbCardModule, NbIconModule, NbPopoverModule } from '@nebular/theme';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';


@NgModule({
  declarations: [
    CustomersComponent,
    ListCustomersComponent,
    AddCustomerComponent,
    EditCustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NbCardModule,
    NbIconModule,
    NbPopoverModule,
  ]
})
export class CustomersModule { }
