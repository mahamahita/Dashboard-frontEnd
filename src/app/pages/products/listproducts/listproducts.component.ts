import { Component, OnInit } from '@angular/core';
import{ProductsService} from'../products.service';
import{Products} from'../products'
import { CommonModule } from "@angular/common";
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.scss']
})
export class ListproductsComponent implements OnInit {
  products:Products[];
  currentPage : number=0;
  pageSize : number=5;
  totalPages :  number=0;
  searchFormGroup! : FormGroup;
  searchByDesignation: string;
  count:number=0;
    isLoading:boolean = false;
      responseCode:number = 2;
page:number=1;
key:string='id';
  reverse: boolean=false;


  constructor(private productsService:ProductsService, private router: Router, private fb : FormBuilder,
  ) { }

  ngOnInit(): void {

this.getProducts();
this.searchFormGroup = this.fb.group({
keyword: this.fb.control(null)
});

  }



private getProducts(){
this.productsService.getProductsList().subscribe(data => {
this.products= data;});
}

updateProduct(id: number){
 this.router.navigate(['/pages/products/update', id]);
}

productDetails(id: number){
 this.router.navigate(['/pages/products/details', id]);

}


 deleteProduct(id: number){
  if (confirm('Etes vous sur de vouloir supprimer ce produit?')){
this.productsService.deleteProduct(id).subscribe(data => {
console.log(data);
this.getProducts();

})}
}
getByDesignation(){
    if(this.searchByDesignation ==""){
      this.ngOnInit()
    }else{
    this.products= this.products.filter(res =>{
    return res.designation.toLocaleLowerCase().match(this.searchByDesignation.toLocaleLowerCase());
    })

}
  }



  sort(key: any){
  this.key = key;
  this.reverse= !this.reverse;}

}
