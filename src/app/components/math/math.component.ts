import { Component, OnInit } from '@angular/core';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css'],
})
export class MathComponent implements OnInit {
  // Dependency Injection
  constructor(private mathObj: MathService) {}

  ngOnInit(): void {
    let addRes = this.mathObj.add(2, 3);
    console.log(addRes);

    console.log(this.mathObj.isEven(5));
    console.log(this.mathObj.isEven(4));
  }
}
