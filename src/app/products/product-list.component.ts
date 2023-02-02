import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{

    constructor(private productService:ProductService){}
    pageTitle:string = 'Product List!';
    imageWidth = 50;
    imageMargin = 2;
    showImage: boolean = false;
    private _listFilter:string = '';
    errorMessage:string = '';
    sub!: Subscription;
    filteredProducts:IProduct[]=[];
    products: IProduct[] =[];

    ngOnInit(): void {
      // this._listFilter = 'cart';
      console.log("Initialized ProductListComponent")

      this.sub = this.productService.getProducts().subscribe({
        next:products=>{this.products=products;
          this.filteredProducts = this.products;},
        error:error=>this.errorMessage = error,
      });
      
  }

    get listFilter():string{
      return this._listFilter;
    }

    set listFilter(value:string){
      this._listFilter = value; 
      console.log('setFilter: '+ this._listFilter);
      this.filteredProducts = this.performFilter(this._listFilter);
    }

    performFilter(value:string):IProduct[]{
      value = value.toLowerCase();
      return this.products.filter((product:IProduct)=>{
        return product.productName.toLowerCase().includes(this._listFilter);
      })
    }

   toggleImage():void{
      this.showImage = !this.showImage;
    };
    
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
    onNotify(value:string):void{
      console.log('Got the value from starComponent: '+ value);
      
    }

}