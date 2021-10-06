import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'people-rnd',
  templateUrl: './nums-rnd.component.html',
  styleUrls: ['./app.component.css']
})

export class NumsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  result:any;

  Num1 = Math.floor(Math.random() * 46) + 1;
  Num2 = Math.floor(Math.random() * 46) + 1;
  Num3 = Math.floor(Math.random() * 46) + 1;
  Num4 = Math.floor(Math.random() * 46) + 1;
  Num5 = Math.floor(Math.random() * 46) + 1;
  Num6 = Math.floor(Math.random() * 46) + 1;


  clickedNum1(){
    this.result = this.Num1;
  }

  clickedNum2(){
    this.result = this.Num2;
  }

  clickedNum3(){
    this.result = this.Num3;
  }

  clickedNum4(){
    this.result = this.Num4;
  }

  clickedNum5(){
    this.result = this.Num5;
  }

  clickedNum6(){
    this.result = this.Num6;
  }

}
