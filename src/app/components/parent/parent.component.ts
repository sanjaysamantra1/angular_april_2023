import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  a: number = 10;
  myName: string = '';

  f1(msg: string) {
    console.log('I am f1 from Parent Component', msg);
  }
  receiveDataFromChild(name: string) {
    this.myName = name;
  }
}
