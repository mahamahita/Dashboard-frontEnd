import {Component, Input, OnInit} from '@angular/core';
import {Invoice} from "../Invoice";
import {ActivatedRoute, Router} from "@angular/router";
import {InvoiceService} from "../invoice.service";

@Component({
  selector: 'ngx-update-invoice',
  templateUrl: './update-invoice.component.html',
  styleUrls: ['./update-invoice.component.scss']
})
export class UpdateInvoiceComponent implements OnInit {

  currentInvoice: Invoice;
  id: number;

  constructor(private invoiceService:InvoiceService,
    private activatedRoute: ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    console.log(this.currentInvoice);
    this.currentInvoice = new Invoice();
    this.invoiceService.getCoursById(this.id).subscribe(data=>{
      this.currentInvoice = data;
    },error => console.log(error));

  }

  onSubmit() {
    this.invoiceService.updateInvoice(this.id, this.currentInvoice).subscribe(data => {
      console.log(data);
      this.gotoInvoiceList();
    }),
      error => console.log(error);
  }

  private gotoInvoiceList() {
    this.router.navigate(['/pages/invoice/principale']);
  }
}
