import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() {}

  private employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
  ];

  getAllEmployees() {
    return this.employees;
  }
  getMaleEmployees() {
    return this.employees.filter((emp) => emp.gender === 'male');
  }
  getFemaleEmployees() {
    return this.employees.filter((emp) => emp.gender === 'female');
  }
  addEmployee(emp: any) {
    return this.employees.push(emp);
  }
}
