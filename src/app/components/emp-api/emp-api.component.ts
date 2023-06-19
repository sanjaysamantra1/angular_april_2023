import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmpService } from 'src/app/services/emp.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-emp-api',
  templateUrl: './emp-api.component.html',
  styleUrls: ['./emp-api.component.css'],
})
export class EmpApiComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private empService: EmpService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.empService.getAllEmployees().subscribe((response: Employee[]) => {
      console.log(response)
      this.employees = response;
    });
  }
  addEmp(eId: any, firstName: any, lastName: any, email: any, sal: any) {
    const newEmp = { eId, firstName, lastName, email, sal };

    this.empService.addEmployee(newEmp).subscribe((response: any) => {
      this.getEmployees();
      Swal.fire('Cool', 'Employee Added Successfully!!!');
    });
  }
  deleteEmp(id: any) {
    const flag = confirm('Are you sure you want to delete?');
    if (flag) {
      this.empService.deleteEmployee(id).subscribe((response: any) => {
        Swal.fire('Great', `Employee ${id} Deleted Successfully!!!`);
        this.getEmployees();
      });
    }
  }
}
