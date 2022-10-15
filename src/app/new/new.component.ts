import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  randRoll:number=0;
  n=0;
  ngOnInit(): void {
  }
 generate=()=>{
  this .randRoll=Math.random();
  this.randRoll*=69;
  this.n=Math.floor(this.randRoll);
  if(this.n==56){
    alert("Your Roll no");
  }
 }
}
