import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  //Random Number generator
  randNo=0;
  integerNum=0;

  constructor() { }

  ngOnInit(): void {
  }
  generateRand=()=>{
    this.randNo=Math.random();
    this.randNo*=100;
    this.integerNum=Math.floor(this.randNo);
  }

}
