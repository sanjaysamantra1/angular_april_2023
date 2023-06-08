import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  inputs: ['aChild', 'f1'],
  outputs: ['eventObj'],
})
export class Child1Component implements OnInit {
  aChild: any;
  f1: any;
  name: string = 'Sachin Tendulkar';

  eventObj = new EventEmitter();
  sendDataToParent() {
    this.eventObj.emit(this.name);
  }

  f2() {
    console.log('I am f2 from child-1');
  }

  constructor() {}

  ngOnInit(): void {}
}
