import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
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
}
