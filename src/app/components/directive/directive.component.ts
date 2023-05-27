import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  a: number = 5;
  dayNumber: number = new Date().getDay();
  cities: string[] = ['Mumbai', 'Chennai', 'Delhi', 'Pune', 'Hyderabad'];
}
