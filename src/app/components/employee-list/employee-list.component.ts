import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  // providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  employees: any = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}

  getAllEmps() {
    this.employees = this.employeeService.getAllEmployees();
  }
  getMaleEmps() {
    this.employees = this.employeeService.getMaleEmployees();
  }
  getFemaleEmps() {
    this.employees = this.employeeService.getFemaleEmployees();
  }
}
