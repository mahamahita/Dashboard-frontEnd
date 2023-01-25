import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { NgxPaginationModule } from 'ngx-pagination';
import{Ng2OrderModule} from 'ng2-order-pipe';
import{Ng2SearchPipeModule} from 'ng2-search-filter'
@NgModule({
  declarations: [
    ProductsComponent,
    ListproductsComponent,
    CreateproductComponent,
    UpdateproductComponent,
    ProductdetailsComponent,

  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ProductsRoutingModule,
HttpClientModule,
FormsModule,
NgxPaginationModule,
Ng2OrderModule,
Ng2SearchPipeModule
    ]
})
export class ProductsModule { }
