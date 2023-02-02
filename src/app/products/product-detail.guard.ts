import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot, //provides current route information
    state: RouterStateSnapshot /* provides router state information */): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //checking if the url is correct
      const id = Number(route.paramMap.get('id'));
      if(isNaN(id) || id < 1){
        alert('invalid url');
        this.router.navigate((['/products']));
        return false; 
      }
      return true;
  }
  
}