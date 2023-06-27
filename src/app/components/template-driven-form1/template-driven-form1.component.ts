import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form1',
  templateUrl: './template-driven-form1.component.html',
  styleUrls: ['./template-driven-form1.component.css'],
})
export class TemplateDrivenForm1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  user = { firstName: 'Sachin', lastName: 'Tendulkar' };

  submitForm(formData: any) {
    console.log(formData);
    console.log(this.user);
  }
  resetForm(myForm:any){
    console.log("Do something...");
    myForm.resetForm();
  }
}
