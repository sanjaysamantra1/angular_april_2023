import { Component, OnInit } from '@angular/core';
import * as data from './users.json';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {}

  users = (data as any).default;
}
