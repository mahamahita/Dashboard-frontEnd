import {Component, OnInit} from '@angular/core';
import {Invoice} from "../../Invoice";
import {FormBuilder, Validators} from "@angular/forms";
import {InvoiceService} from "../../invoice.service";
import {Router} from "@angular/router";
import {NbWindowRef} from "@nebular/theme";

@Component({
  selector: 'ngx-add-invoice-to-facture',
  templateUrl: './add-invoice-to-facture.component.html',
  styleUrls: ['./add-invoice-to-facture.component.scss']
})
export class AddInvoiceToFactureComponent implements OnInit {

  invoice: Invoice = new Invoice();

  addInvoiceToFactureForm = this.fb.group({
    // id: ['', Validators.required],
    // reference: ['', Validators.required],
    // dateFacture: ['', Validators.required],
    // decompte: ['', Validators.required],
    // sommeGlobale: ['', Validators.required],
  });

  constructor(private invoiceService: InvoiceService,
              private fb: FormBuilder,
              private router: Router,
              public windowRef: NbWindowRef) {
  }

  ngOnInit(): void {

  }

  onSubmit() {
    // if (this.addInvoiceToFactureForm.invalid) {
    //   return;
    // }


      this.windowRef.close();


  }




}
