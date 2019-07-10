import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { ClothcomponentComponent } from './clothcomponent/clothcomponent.component';
import { ProductlistviewComponent } from './productlistview/productlistview.component';
import { CartfunctionsComponent } from './cartfunctions/cartfunctions.component';

@NgModule({
  declarations: [NavigationbarComponent, ClothcomponentComponent, ProductlistviewComponent, CartfunctionsComponent],
  imports: [
    CommonModule
  ],exports:[NavigationbarComponent,ProductlistviewComponent]
})
export class HomepagemoduleModule { }
