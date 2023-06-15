import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
  // providers: [EmployeeService],
})
export class EmployeeAddComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}

  addEmp(eId: any, name: any, gender: any, sal: any) {
    const newEmp = { eId, name, gender, sal };
    this.employeeService.addEmployee(newEmp);
  }
}
