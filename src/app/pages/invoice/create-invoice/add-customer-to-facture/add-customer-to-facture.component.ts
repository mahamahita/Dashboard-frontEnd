import {Component, OnInit} from '@angular/core';
import {InvoiceService} from "../../invoice.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NbWindowRef} from "@nebular/theme";
import {CustomersService} from "../../../customers/customers.service";


class Customer {
}

@Component({
  selector: 'ngx-add-customer-to-facture',
  templateUrl: './add-customer-to-facture.component.html',
  styleUrls: ['./add-customer-to-facture.component.scss']
})
export class AddCustomerToFactureComponent implements OnInit {

  customer: Customer = new Customer();

  constructor(private invoiceService: InvoiceService,
              private fb: FormBuilder,
              private router: Router,
              public windowRef: NbWindowRef) {
  }

  addCustomerToFactureForm = this.fb.group({
    id: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.email],
    adress: ['', Validators.required],
    city: ['', Validators.required],
  });


  ngOnInit(): void {
  }

  onSubmit() {
    // if (this.addCustomerToFactureForm.invalid) {
    //   return;
    // }

    console.log(this.addCustomerToFactureForm.value);
    //this.router.navigate(['/pages/invoice/create-invoice'], addCustomerToFactureForm.value)
    this.windowRef.close();

  }
}
