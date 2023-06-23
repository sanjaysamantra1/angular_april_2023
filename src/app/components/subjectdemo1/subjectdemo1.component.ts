import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjectdemo1',
  templateUrl: './subjectdemo1.component.html',
  styleUrls: ['./subjectdemo1.component.css'],
})
export class Subjectdemo1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.subjectDemo();
    // this.behaviourSubjectDemo();
    // this.replaySubjectDemo();
    this.asyncSubjectDemo();
  }
  subjectDemo() {
    let car_publisher = new Subject();
    car_publisher.next('Tata');
    let subscriber1 = car_publisher.subscribe((car) => {
      console.log('Subscriber-1', car);
    });
    car_publisher.next('Honda');
    let subscriber2 = car_publisher.subscribe((car) => {
      console.log('Subscriber-2', car);
    });
    car_publisher.next('Maruti');
    car_publisher.next('Toyota');
  }
  behaviourSubjectDemo() {
    let car_publisher = new BehaviorSubject('Initial Car');
    car_publisher.next('Tata');
    let subscriber1 = car_publisher.subscribe((car) => {
      console.log('Subscriber-1', car);
    });
    car_publisher.next('Honda');
    let subscriber2 = car_publisher.subscribe((car) => {
      console.log('Subscriber-2', car);
    });
    car_publisher.next('Maruti');
    car_publisher.next('Toyota');
  }
  replaySubjectDemo() {
    let car_publisher = new ReplaySubject();
    car_publisher.next('Tata');
    let subscriber1 = car_publisher.subscribe((car) => {
      console.log('Subscriber-1', car);
    });
    car_publisher.next('Honda');
    let subscriber2 = car_publisher.subscribe((car) => {
      console.log('Subscriber-2', car);
    });
    car_publisher.next('Maruti');
    car_publisher.next('Toyota');
  }
  asyncSubjectDemo() {
    let car_publisher = new AsyncSubject();
    car_publisher.next('Tata');
    let subscriber1 = car_publisher.subscribe((car) => {
      console.log('Subscriber-1', car);
    });
    car_publisher.next('Honda');
    let subscriber2 = car_publisher.subscribe((car) => {
      console.log('Subscriber-2', car);
    });
    car_publisher.next('Maruti');
    car_publisher.next('Toyota');
    car_publisher.complete();
  }
}
