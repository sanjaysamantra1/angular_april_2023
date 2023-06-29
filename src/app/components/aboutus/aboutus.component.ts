import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
})
export class AboutusComponent implements OnInit {
  
  constructor(private routerObj: Router) {}

  ngOnInit(): void {}

  doSomethingAndGoToCareers() {
    for (let i = 1; i <= 1000; i++) {
      console.log('Doing Something....');
    }
    this.routerObj.navigateByUrl('/careers');
  }
}
