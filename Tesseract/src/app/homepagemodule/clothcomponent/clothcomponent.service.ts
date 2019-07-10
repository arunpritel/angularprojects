import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import{BehaviorSubject} from 'rxjs'



@Injectable({
  providedIn: 'root',
})
export class ClothService {
listdata:any = [];
selecteddata:any=[];
cartadd:any=[];
// searcheddata:any=[];
private jsonURL = 'assets/shopping.json';
    
private messageSource = new BehaviorSubject('');
currentMessage = this.messageSource.asObservable();
private carting = new BehaviorSubject('');
currentcart = this.carting.asObservable();
constructor(private http: HttpClient) { 
    this.getJSON().subscribe(data => {
        this.listdata=data;
        console.log(data);
    });
}
changeMessage(message: any) {
  console.log("hi");
  this.messageSource.next(message)
  console.log(message);
}
changecart(adding: any) {
  console.log("h555i");
  this.carting.next(adding);
  console.log("previously")
  console.log(adding);
  return adding;
}
public getJSON(): Observable<any> {
    return this.http.get(this.jsonURL);
}

  sort(val){  
    console.log(this.listdata);
   this.selecteddata=this.listdata.filter(data => {
     return data.For == val.target.value ; 
  })
   console.log(this.selecteddata);
   return this.selecteddata; 
  }
  // submitme(enter){
  //   this.searcheddata=this.listdata.filter(data=>{
  //     return data.For==enter.target.value
  //   })
  // }
  Addto(title,price){
    alert("add to cart function")
   console.log(title);
   console.log(price);
  
this.cartadd=this.listdata.filter((cart)=>{
  return (cart.title==title ) 

})

return this.cartadd;

  }
}



