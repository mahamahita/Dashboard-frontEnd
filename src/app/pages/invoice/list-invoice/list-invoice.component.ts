import { Component, OnInit } from '@angular/core';
import {Invoice} from '../Invoice';
import {InvoiceService} from '../invoice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.scss'],
})
export class ListInvoiceComponent implements OnInit {

  invoices: Invoice[] = [];
  count: number = 0;
  isLoading: boolean = false;
  showData: boolean = false;

  resultInvoices: Invoice[] = [];
  searchedText: string = '';

  responseCode: number  = 2;
  page: number = 1;
  total: string | number;

  //send invoice to other compenent
  currentInvoice: Invoice;
  /*injection du service*/
  constructor(private invoiceService: InvoiceService, private router: Router) { }

  ngOnInit(): void {
    this.getAllInvoices();
    this.total = this.invoices.length;
  }

  //findAll
  private getAllInvoices() {
    this.isLoading = true;
    this.invoiceService.findAll().subscribe((resultat) =>
    {
      this.resultInvoices = this.invoices = resultat ;
      this.count = this.invoices.length ;
    }, error => {
      this.isLoading = false;
      }
    )
  }


  searchInvoice() {
    this.resultInvoices = this.invoices.filter((i) =>
      i.reference
        .toLocaleLowerCase()
        .includes(this.searchedText.toLocaleLowerCase())
    );
  }


  //delete
  deleteInvoice(id: any) {
    //popup are you sur
    if(confirm("vous etes sur d'avoir supprimer cette facture ? ")){
      this.invoiceService.deleteInvoice(id).subscribe(result=>{
        console.log(result);
        this.getAllInvoices();
      },error => console.log(error))
    }
  }


  //add invoice:navigate to other compenent
  addInvoice() {
    this.router.navigate(['/pages/invoice/create-invoice']);

  }



  updateCours(id: number) {
    //this.router.navigate(['/pages/invoice/update-invoice', id]);
    this.router.navigate(['/pages/invoice/update-invoice', id]);
  }


  goToDetailInvoice(id: number) {
    this.router.navigate(['/pages/invoice/detail-invoice', id]);
  }
}
