import { Component, OnInit } from '@angular/core';
import{ClothService} from '../clothcomponent/clothcomponent.service'

@Component({
  selector: 'app-productlistview',
  templateUrl: './productlistview.component.html',
  styleUrls: ['./productlistview.component.css']
})
export class ProductlistviewComponent implements OnInit {
message:any=[];
cartadd:any=[];
  constructor(private clothservice:ClothService) { }

  ngOnInit() {
     
    this.clothservice.currentMessage.subscribe(message => this.message = message)
    console.log("shbdyafg");
    console.log(this.message);
  }
  addto(name,price){
    this.clothservice.Addto(name,price);
    this.cartadd.push({name,price})
    this.cartadd=this.clothservice.changecart(this.cartadd) 
    
  }
 
}
