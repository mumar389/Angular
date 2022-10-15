import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-jokes',
  templateUrl: './random-jokes.component.html',
  styleUrls: ['./random-jokes.component.css']
})
export class RandomJokesComponent implements OnInit {

  constructor(private http: HttpClient) { }
  randomJokeObj:string="";
  ngOnInit(): void {
  }
  //Random jokes api
  getRandomJokes=()=>{
    this.http.get("https://api.chucknorris.io/jokes/random").subscribe((data:any)=>{
      this.randomJokeObj=data.value;
    })

  }
}
