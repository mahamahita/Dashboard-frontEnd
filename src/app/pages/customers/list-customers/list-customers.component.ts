import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { Customers } from '../customers';
import { CustomersService } from '../customers.service';
import { EditCustomersComponent } from '../edit-customers/edit-customers.component';

@Component({
  selector: 'ngx-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit {

  customers: Customers[];
  customersAll: Customers[];

  constructor(private customerService:CustomersService,private windowService: NbWindowService) { }

  ngOnInit(): void {

    this.getListCustomers();
  }


  private getListCustomers(){
    this.customerService.getListCustomers().subscribe(data=>{
      this.customers=data;
      this.customersAll = data;
      console.log(data);
    });
  }

  addCustomer() {
    this.windowService.open(AddCustomerComponent, { title: `Edit Customer` });
  }
  deleteCustomer(id:number){
    console.log(id)
    this.customerService.deleteCustomer(id).subscribe(data=>{
      console.log(data)
      this.getListCustomers();
    })
  }

  editCustomer(customer:Customers){
    this.windowService.open(EditCustomersComponent, {
      context: {
        customer: customer
      }
    });
  }

  search(event:any){
    let filter = event.target?.value;
    if(filter != null && filter != ''){
      this.customers = this.customers.filter(c => c.firstName.includes(filter));
    }else{
      this.customers = this.customersAll;
    }
  }

}
