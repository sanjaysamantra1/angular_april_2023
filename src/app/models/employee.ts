/* export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  sal: number;
  email: string;
} */

//Model Class
export class Employee {
  public id: number;
  public firstName: string;
  public lastName: string;
  public sal: number;
  public email: string;

  constructor(id: number, firstName: string, lastName: string, sal: number,email:string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.sal = sal;
    this.email = email;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  getYearlySalary(): number {
    return 12 * this.sal;
  }
}
