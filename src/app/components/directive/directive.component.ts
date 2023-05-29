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
  employees = [
    { eId: 101, name: 'sanjay', sal: 5000 },
    { eId: 104, name: 'deepak', sal: 8000 },
    { eId: 103, name: 'sameer', sal: 7000 },
    { eId: 102, name: 'manoj', sal: 9000 },
  ];
  addEmployee() {
    this.employees = [
      { eId: 101, name: 'sanjay', sal: 5000 },
      { eId: 104, name: 'deepak', sal: 8000 },
      { eId: 103, name: 'sameer', sal: 7000 },
      { eId: 102, name: 'manoj', sal: 9000 },
      { eId: 106, name: 'sanjay', sal: 8500 },
    ];
  }
  trackByEmpId(employee: any) {
    return employee.eId;
  }
}
