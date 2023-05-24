import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  // template: '<h1>This is My header Component</h1>',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
