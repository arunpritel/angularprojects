import { Component, OnInit } from '@angular/core';
import{ClothService} from '../clothcomponent/clothcomponent.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {
array:any=[];
  constructor(private clothservice:ClothService) { }
  submitted(search){
    console.log("coming")
    this.array=this.clothservice.submitme(search);
  }

  ngOnInit() {
  }

}
