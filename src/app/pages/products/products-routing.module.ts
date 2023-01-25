import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { ProductsComponent } from './products.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';


const routes: Routes = [
{path:'', redirectTo:'list', pathMatch:'full'},{
  path: '',
  component: ProductsComponent,
  children: [

    {
      path: 'list',
      component: ListproductsComponent,
    },
    {
          path: 'create',
          component: CreateproductComponent,
        },
    {
           path: 'update/:id',
           component: UpdateproductComponent,
         },
         {
                    path: 'details/:id',
                    component: ProductdetailsComponent,
                  },
  ],
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule { }
