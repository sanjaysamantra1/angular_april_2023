import { Component, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  arr: any = [10, 20, 30, 40];
  a: number = 10;
  myName: string = '';
  flag: boolean = true;

  @ViewChild('newNum') newNum: any;
  @ViewChild('.myBtn') myBtn: any;
  @ViewChild(Child1Component) child1comp: any;

  f1(msg: string) {
    console.log('I am f1 from Parent Component', msg);
  }
  receiveDataFromChild(name: string) {
    this.myName = name;
  }

  constructor() {
    console.log('Parent constructor');
    this.a = 10;
  }
  // ngOnInit() {
  //   console.log('Parent ngOnInit');
  // }
  // ngOnChanges() {
  //   console.log('Parent ngOnChanges');
  // }
  // ngDoCheck() {
  //   console.log('Parent ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked');
  // }
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
    console.log(this.newNum.nativeElement);
    this.newNum.nativeElement.focus();
    // this.myBtn.nativeElement.backgroundColor = 'pink'
    console.log(this.myBtn)
  }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
}
