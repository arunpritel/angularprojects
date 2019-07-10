import { NgModule } from '@angular/core';
import { Routes} from '@angular/router';
import {RouterModule } from '@angular/router';
import {ClothcomponentComponent} from './homepagemodule/clothcomponent/clothcomponent.component'
import { ProductlistviewComponent } from './homepagemodule/productlistview/productlistview.component';



const routes: Routes = [
  {path:'clothing',component:ClothcomponentComponent},
  {path:'productlist',component:ProductlistviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
