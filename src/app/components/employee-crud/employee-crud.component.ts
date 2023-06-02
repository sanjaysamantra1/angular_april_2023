import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css'],
})
export class EmployeeCrudComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
  ];
  selectedEmployee: any = {};
  display: any;

  viewEmp(emp: any) {
    this.selectedEmployee = emp;
    this.openModalDialog();
  }

  openModalDialog() {
    this.display = 'block'; //Set block css
  }
  closeModalDialog() {
    this.display = 'none'; //set none css after close dialog
  }

  addEmp(eId: any, name: any, sal: any, gender: any) {
    if (eId && name && sal && gender) {
      let newEmp = { eId, name, sal, gender };
      this.employees.push(newEmp);
    } else {
      alert('Please fill the form');
    }
  }

  deleteEmp(ind: number) {
    const isConfirmed = confirm('Are You sure!! you want to delete?');
    if (isConfirmed) {
      this.employees.splice(ind, 1);
    }
  }
}
