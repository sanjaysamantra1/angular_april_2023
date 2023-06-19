import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    let url = 'http://jsonplaceholder.typicode.com/users';

    this.httpClient.get(url).subscribe((response) => {
      this.users = response;
      console.log(response);
    });
  }
}
