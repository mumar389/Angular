import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dog-image',
  templateUrl: './dog-image.component.html',
  styleUrls: ['./dog-image.component.css']
})
export class DogImageComponent implements OnInit {
  dogImg:string="";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  getImage=()=>{
    this.http.get("https://dog.ceo/api/breeds/image/random/1").subscribe((data:any)=>{
      this.dogImg=data.message[0];
      console.log(this.dogImg);

    })

  }

}
