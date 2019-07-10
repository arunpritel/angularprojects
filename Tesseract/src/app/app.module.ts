import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HomepagemoduleModule} from './homepagemodule/homepagemodule.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule}from '@angular/common/http';
import { ElectronicsComponent } from './electronics/electronics.component'

@NgModule({
  declarations: [
    AppComponent,
    ElectronicsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepagemoduleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
