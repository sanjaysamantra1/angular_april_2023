import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observabledemo2',
  templateUrl: './observabledemo2.component.html',
  styleUrls: ['./observabledemo2.component.css'],
})
export class Observabledemo2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.fun1();
    this.fetchStudents()
  }
  fun1() {
    let observable1 = new Observable(function (publisher) {
      publisher.next('Response-1');
      publisher.next('Response-2');
      publisher.next('Response-3');
      publisher.next('Response-4');
      publisher.complete();
    });

    observable1.subscribe({
      next: (response) => {
        console.log('next called...');
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed...');
      }
    });

  }
  fetchStudents(){
    let studentObservable = new Observable(function(publisher){
      publisher.next(['Sumit','Ajit','ramesh']);
      publisher.next(['Sanjay','Sameer','Deepak']);
      publisher.next(['Manoj','Bikash']);
      publisher.complete();
    });
    let students:any = []

    studentObservable.subscribe({
      next: (response:any) => {
        console.log('partial data received', response)
        students.push(...response);
      },
      error: (error) => {console.log('Something went wrong', error)},
      complete: () => {console.log('All Students data received...');console.log(students)}
    });
  }
  
}
