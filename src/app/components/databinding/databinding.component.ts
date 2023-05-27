import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: ['div{color:blue}'],
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name: string = 'Sachin';
  img_url: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpBjDTneFYcSKUgs7CmIIOXAiJRzCfuPbvRC0xa38XJWMrr52Cm18Q3ifWVS7YJrsLPM8&usqp=CAU';
  flag: boolean = false;
  a: number = 100;
  b: number = 200;
  msg: string = '';
  selectedState: string = 'Odisha';

  f1() {
    alert('This is f1 function...');
  }
  add(a: any, b: any) {
    alert(`Sum of ${this.a} and ${this.b} is ${this.a + this.b}`);
    alert(`Sum of ${a} and ${b} is ${a + b}`);
  }
  toggleFlag() {
    this.flag = !this.flag;
  }
  addition(a: any, b: any) {
    alert(+a + +b);
  }
  subtraction(a: any, b: any) {
    alert(a - b);
  }
  test(myBox1: any) {
    console.log(myBox1.id, myBox1.name, myBox1.placeholder);
  }
}
