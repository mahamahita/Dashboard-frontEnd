import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbWindowRef } from '@nebular/theme';
import { Customers } from '../customers';
import { CustomersService } from '../customers.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.scss']
})
export class EditCustomersComponent implements OnInit {
  customer:Customers;

  constructor(private customerService:CustomersService,
    private fb:FormBuilder,
    private router:Router,
    public windowRef: NbWindowRef) { }

  customerForm=this.fb.group({
    id:['',Validators.required],
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    email:['',Validators.email],
    adress:['',Validators.required],
    city:['',Validators.required],
  });


  ngOnInit(): void {
    this.customerForm.get('id').setValue(this.customer.id);
    this.customerForm.get('firstName').setValue(this.customer.firstName);
    this.customerForm.get('lastName').setValue(this.customer.lastName);
    this.customerForm.get('email').setValue(this.customer.email);
    this.customerForm.get('adress').setValue(this.customer.adress);
    this.customerForm.get('city').setValue(this.customer.city);
  }

  onSubmit(){
    this.customerService.editCustomer(this.customerForm.value).subscribe(data=>{
      console.log(data)
      this.windowRef.close();
      window.location.href = '/pages/customers/principale'
    });

  }

}
