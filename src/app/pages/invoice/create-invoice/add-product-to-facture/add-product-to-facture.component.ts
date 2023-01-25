import {Component, OnInit} from '@angular/core';
import {Invoice} from "../../Invoice";
import {InvoiceService} from "../../invoice.service";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {NbWindowRef} from "@nebular/theme";

@Component({
  selector: 'ngx-add-product-to-facture',
  templateUrl: './add-product-to-facture.component.html',
  styleUrls: ['./add-product-to-facture.component.scss']
})
export class AddProductToFactureComponent implements OnInit {
  invoice: Invoice = new Invoice();

  addProductToFactureForm: any;

  constructor(private invoiceServce: InvoiceService,
              private fb: FormBuilder,
              private router: Router,
              public windowRef: NbWindowRef) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // if (this.addProductToFactureForm.invalid) {
    //   return;
    // }
    let a = this.invoiceServce.setProduct(this.addProductToFactureForm.value);
    console.log(a);
    this.windowRef.close();
    //window.location.href = '/pages/invoice/create-invoice'
    //this.router.navigate([])


  }
}
