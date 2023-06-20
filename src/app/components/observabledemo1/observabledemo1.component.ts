import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observabledemo1',
  templateUrl: './observabledemo1.component.html',
  styleUrls: ['./observabledemo1.component.css'],
})
export class Observabledemo1Component implements OnInit {

  constructor(private httpClient:HttpClient) {}

  ngOnInit(): void {
    this.fetchUsers();
    this.fetchComments();
    this.fetchPhotos()
  }

  fetchUsers() {
    let userPromise = fetch('https://jsonplaceholder.typicode.com/users');
    userPromise.then(
      (response)=>{console.log(response)},
      (error)=>{console.log(error)}
    )
  }
  fetchComments(){
    let commentObservable = this.httpClient.get('https://jsonplaceholder.typicode.com/comments');
    commentObservable.subscribe(
      (response)=> console.log(response),
      (err)=> console.log(err),
      ()=> console.log('Completed...'),
    )
  }
  fetchPhotos(){
    this.httpClient.get('https://jonplaceholder.typicode.com/photos').subscribe({
      next: (response)=>{console.log(response)},
      error: (err)=>{console.log(err)},
      complete: ()=>{console.log('completed...')}
    });
  }
  
}
