import {Component, OnInit} from '@angular/core';
import {Chart, registerables } from 'chart.js';
import{DashboardService} from './dashboard.service';
Chart.register(...registerables);



@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

constructor(private service: DashboardService){}
productTable=[];
invoiceTable=[];
customerTable=[];
salesnumber: any=0;
  productdata: any;
  customerdata:any;
  invoicedata:any;
  labeldata1: any[] = [];
  labeldata2: any[] = ['casa','rabat','mohammedia','kenitra'];
labeldata3: any[] = [];
  realdata1: any[] = [];
    realdata2: any[] = [];
    realdata3: any[] = [];
    realdata4: any[] = [];

  colordata: any[] = ['#e9bbba', '#cedef0','#a9dce3','#a0b6f7','#bdfff6','#c299d0','#9fafca' ];


  ngOnInit() :void {




 this.service.Getproductinfo().subscribe(result => {
      this.productdata = result;
      if(this.productdata!=null){
        for(let i=0; i<this.productdata.length ;i++){

          this.labeldata1.push(this.productdata[i].designation);
          this.realdata1.push(this.productdata[i].sales);
          this.realdata2.push(this.productdata[i].depositQuantity);
          this.colordata.push(this.productdata[i].colorcode);
        }
        this.RenderChart(this.labeldata1,this.realdata1,this.colordata,'bar','barchart','Ventes');
        this.RenderChart(this.labeldata1,this.realdata2,this.colordata,'pie','piechart','Quantité en dépôt');

      }
    });

this.service.Getcustomerinfo().subscribe(result => {
      this.customerdata = result;

      if(this.customerdata!=null){

        for(let i=0; i<this.customerdata.length ;i++){


          this.realdata3.push(this.customerdata[i].id);

          this.colordata.push(this.customerdata[i].colorcode);
        }


        this.RenderChart(this.labeldata2,this.realdata3,this.colordata,'doughnut','doghnut','Villes');
      }
    });

this.service.Getinvoiceinfo().subscribe(result => {
      this.invoicedata = result;
      if(this.invoicedata!=null){
        for(let i=0; i<this.invoicedata.length ;i++){

          this.labeldata3.push(this.invoicedata[i].dateFacture);
         this.realdata4.push(this.invoicedata[i].id );
        }

        this.RenderChart2(this.labeldata3,this.realdata4,this.colordata,'line','linechart','Commandes');


      }
    });

this.service.Getproductinfo().subscribe(result => {
      this.invoicedata = result;
      if(this.invoicedata!=null){
        for(let i=0; i<this.invoicedata.length ;i++){

         this.invoiceTable=this.invoiceTable.concat(this.invoicedata[i]);
          }
      }
    });
this.service.Getproductinfo().subscribe(result => {
      this.productdata = result;
      if(this.productdata!=null){
        for(let i=0; i<this.productdata.length ;i++){

         this.productTable=this.productTable.concat(this.productdata[i]);
          }
      }
    });

    this.service.Getproductinfo().subscribe(result => {
          this.productdata = result;
          if(this.productdata!=null){
            for(let i=0; i<this.productdata.length ;i++){

             this.salesnumber=this.salesnumber+(this.productdata[i].sales);
              }
          }
        });

        this.service.Getcustomerinfo().subscribe(result => {
              this.customerdata = result;
              if(this.customerdata!=null){
                for(let i=0; i<this.customerdata.length ;i++){

                 this.customerTable=this.customerTable.concat(this.customerdata[i]);
                  }
              }
            });

  }


  RenderChart(labeldata:any,maindata:any,colordata:any,type:any,id:any,label:any){
  const myChart = new Chart(id, {
        type: type,
        data: {
          labels: labeldata,
          datasets: [{
            label: label,
            data: maindata,
            backgroundColor: colordata,
            borderColor:
              'rgba(300, 99, 132, 1)'
            ,
            borderWidth: 1
          }]
        },
        options: {
         responsive: true,
          scales: {


          }
        }
      });}

       RenderChart2(labeldata:any,maindata:any,colordata:any,type:any,id:any,label:any){
        const myChart = new Chart(id, {
              type: type,
              data: {
                labels:labeldata,
                datasets: [{
                  label: label,
                  data: maindata,
                  backgroundColor:
                                           'rgba(75, 192, 192, 1)',

                  borderColor:
                    'rgba(300, 99, 132, 0.3)'
                  ,
                  borderWidth: 2
                }]
              },
              options: {
                scales: {
                  xAxes: [{
                         type: 'time',
                       time: {
                                          unit: 'month'
                                      }
                       }],
                       y: [{
                                                type: 'time', time: {
                                                                                 unit: 'month'
                                                                             }

                                              }]
                }
              }
            });}



}









