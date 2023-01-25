import { Component, OnInit } from '@angular/core';
import{Products} from'../products'
import{ProductsService} from '../products.service'
import{ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'ngx-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.scss']
})
export class UpdateproductComponent implements OnInit {
id:number;
product:Products=new Products();

  constructor(private productsService: ProductsService,
  private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit(): void {
  this.id= this.route.snapshot.params['id'];

  this.productsService.getProductById(this.id).subscribe(data => {
  this.product = data;
  }, error => console.log(error));
  }



 onSubmit(){
 if (confirm('Confirmer la modification de ce produit?')){
this.productsService.updateProduct(this.id, this.product).subscribe( data =>{
this.goToProductsList();
},
error => console.log(error)
);}
}

goToProductsList(){
this.router.navigate(['/pages/products/list']);
  }
}
