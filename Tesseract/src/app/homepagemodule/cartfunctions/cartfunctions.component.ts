import { Component, OnInit } from '@angular/core';
import{ClothService} from'../clothcomponent/clothcomponent.service'


@Component({
  selector: 'app-cartfunctions',
  templateUrl: './cartfunctions.component.html',
  styleUrls: ['./cartfunctions.component.css']
})
export class CartfunctionsComponent implements OnInit {
cartadd:any=[];
//message:any=[];
  constructor(private clothservice:ClothService) {
    this.clothservice.currentcart.subscribe(adding =>      
      this.cartadd=adding);
  }
  // Addto(title,price){
  //   alert("dey")
  //   this.cartadd=this.clothservice.Addto(title,price);
  //  this.clothservice.changecart(this.cartadd) 
  //  }
  

  ngOnInit() {  
  
    // this.clothservice.currentMessage.subscribe(message => this.message = message)
    // console.log("shbdyafg");
    // console.log(this.message);

  }
  
remove(product){
  console.log(product);
  
}
}
