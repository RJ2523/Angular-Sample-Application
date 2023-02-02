import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductListModule } from './products/product-list.module';

@NgModule({
  declarations: [
    AppComponent, WelcomeComponent
  ],
  imports: [
    ProductListModule,
    BrowserModule, //registers critial application servce provides
    HttpClientModule,
    RouterModule.forRoot([
      {path:'welcome',component:WelcomeComponent},
      {path:'', redirectTo:'welcome', pathMatch:'full'},
      {path:'**', redirectTo:'welcome',pathMatch:'full'}
    ])
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
