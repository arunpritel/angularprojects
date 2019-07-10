import { Component, OnInit } from '@angular/core';
import{ClothService}from './clothcomponent.service'
import{Router} from '@angular/router'
@Component({
  selector: 'app-clothcomponent',
  templateUrl: './clothcomponent.component.html',
  styleUrls: ['./clothcomponent.component.css']
})
export class ClothcomponentComponent implements OnInit {
  selecteddata:any=[];
  constructor(private clothService: ClothService,private router:Router) { }
  sort(val){
    this.selecteddata=this.clothService.sort(val);
   this.clothService.changeMessage(this.selecteddata) 
   }
   redirect(){
    this.router.navigate(['/productlist']); 
   }
  ngOnInit() {
  }

}
