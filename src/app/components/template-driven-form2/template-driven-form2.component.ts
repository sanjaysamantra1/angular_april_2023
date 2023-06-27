import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form2',
  templateUrl: './template-driven-form2.component.html',
  styleUrls: ['./template-driven-form2.component.css'],
})
export class TemplateDrivenForm2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  user = { firstName: '', lastName: '', email: '', hobbies: [] };

  submitForm(myForm: any) {
    console.log(myForm.value);
  }
}
