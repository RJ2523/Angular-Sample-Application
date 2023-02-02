import { NgModule } from "@angular/core";
import { ProductDetailComponent } from "./product-detail.component";
import { convertToSpacesPipe } from "../shared/convert-to-spaces.pipe";
import { ProductListComponent } from "./product-list.component";
import { RouterModule } from "@angular/router";
import { ProductDetailGuard } from "./product-detail.guard";
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
      ProductDetailComponent,
      ProductListComponent,
      convertToSpacesPipe
    ],
    imports:[
    // forChild does not again registers router service avoiding 
    // doint it again since forRoot already registers it one time
    RouterModule.forChild([
      {path:'products', component:ProductListComponent},
      {path:'products/:id', 
       canActivate:[ProductDetailGuard],
      component:ProductDetailComponent},
    ]),
    SharedModule
  ],
  exports:[]
})
export class ProductListModule{ }