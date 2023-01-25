import { Component, OnInit } from '@angular/core';
import{Products} from'../products'
import{ProductsService} from '../products.service'
import{Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ngx-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  id:number;
  product: Products;
  constructor(private route:ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
  this.id= this.route.snapshot.params['id'];
  this.product= new Products();
  this.productsService.getProductById(this.id).subscribe(data => {
  this.product= data;
  })
  }

}
