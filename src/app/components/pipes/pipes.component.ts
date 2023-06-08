import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name = 'saChIn tEnDulKaR';
  mySal = 5000;
  today = new Date();
  user = { id: 101, name: 'sachin', sal: 5000, gender: 'male', add: 'mumbai' };
  arr:any = [10, 20, 50, 30, 40];
  msg: string = '';
  num: number = 0;
  accNo:number = 12345678912;
}
