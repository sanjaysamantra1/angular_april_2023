import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css'],
})
export class ModelDrivenFormComponent implements OnInit {
  registerForm: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // this.initializeMyForm();
    this.initializeMyFormUsingFormBuilder();
  }

  initializeMyForm() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('Sachin', [
        Validators.required,
        Validators.minLength(5),
      ]),
      lastName: new FormControl(),
      email: new FormControl('Sachin@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        pin: new FormControl(123456, [
          Validators.required,
          Validators.pattern('[0-9]{6}'),
        ]),
      }),
    });
  }

  initializeMyFormUsingFormBuilder() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: new FormControl('Sachin', [
          Validators.required,
          Validators.minLength(5),
        ]),
        lastName: new FormControl(),
        email: new FormControl('Sachin@gmail.com', [
          Validators.required,
          Validators.email,
        ]),
        address: new FormGroup({
          street: new FormControl(),
          city: new FormControl(),
          pin: new FormControl(123456, [
            Validators.required,
            Validators.pattern('[0-9]{6}'),
          ]),
        }),
      },
      { updateOn: 'blur' }
    );
  }

  submitMyForm(form: any) {
    console.log(form);
  }
}
