import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef } from '@nebular/theme';
import { Customers } from '../customers';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'ngx-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  customer:Customers=new Customers();

  constructor(private customerService:CustomersService, private fb:FormBuilder,private router:Router,public windowRef: NbWindowRef) { }

  customerForm=this.fb.group({
    id:['',Validators.required],
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    email:['',Validators.email],
    adress:['',Validators.required],
    city:['',Validators.required],
  });

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.customerForm.invalid){
      return;
    }
    this.customerService.addNewCustomer(this.customerForm.value).subscribe(data=>{
      console.log(data)
      this.windowRef.close();
      window.location.href = '/pages/customers/principale'
      //this.router.navigate([])
    });

  }

}
