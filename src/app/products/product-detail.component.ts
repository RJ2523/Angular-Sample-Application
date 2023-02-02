import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';
@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:IProduct | undefined;
  pageTitle:string = 'ProductDetail page';
  sub!: Subscription;
  errorMessage: any;
  constructor(private route : ActivatedRoute,
    private router: Router,
    private productService : ProductService) { }


    //ways to fetch product using product id
      // 1. hit api to fetch products then filter using productid.
      // 2. fetch details from productListComponent.
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    this.sub = (this.productService.getProducts().subscribe({
      next:products=>{this.product = products.filter((p:IProduct)=>{
        return p.productId == id;
      })[0];},
      error:error=>this.errorMessage = error,
    }))
    
  }

 
  onBack():void{
    this.router.navigate(['/products']);
  }

}
