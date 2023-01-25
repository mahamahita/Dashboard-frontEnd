import { Component, OnInit } from '@angular/core';
import{Products} from'../products'
import { FormsModule } from '@angular/forms';
import{ProductsService} from '../products.service'
import{Router} from '@angular/router';
@Component({
  selector: 'ngx-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.scss']
})
export class CreateproductComponent implements OnInit {
  product: Products = new Products();
  constructor(private productsService: ProductsService,
  private router: Router
  ) { }

  ngOnInit(): void {
  }
   saveProduct(){
   if (confirm('Confirmer l\'enregistrement de ce produit?')){
  this.productsService.createProduct(this.product).subscribe( data =>{
  console.log(data);
  this.goToProductsList();},
  error => console.log(error));}}

  goToProductsList(){
this.router.navigate(['/pages/products/list']);
  }
 onSubmit(){
 console.log(this.product);
 this.saveProduct();

 }
}
