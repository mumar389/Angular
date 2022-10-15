// import { NumberFormatStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Umar';
//loops in angular
list=[12,25,16,18,19,20];
names=["Umar","Harsh","Picolo","Deva"];
//Accessing input var
number1=0;
number2=0;  
num3=0;
//functions in Angular
sumMe=()=>{
  this.number1=Number(this.number1);
  this.number2=Number(this.number2);
  this.num3=this.number1+this.number2;
}
  
  count=0;
  increment=()=>{
    this.count++;
    if(this.count>10){
    alert("Plzz Don't increase me so much") 
    this.count=10;
      return 
    }
   
  }
  decrement=()=>{
    if(this.count==0)
      alert("Plzz Be Positive Always")
    if(this.count!=0)
      this.count--;
   
  }
}
