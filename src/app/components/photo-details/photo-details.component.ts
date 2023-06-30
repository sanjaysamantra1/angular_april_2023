import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css'],
})
export class PhotoDetailsComponent implements OnInit {
  id: any;
  photo:any;

  constructor(private activatedRoute: ActivatedRoute,private http:HttpClient) {
    console.log(this.activatedRoute)
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      this.http.get(`https://jsonplaceholder.typicode.com/photos/${this.id}`).subscribe((response:any)=>{
        this.photo = response;
      });

    });
  }
}
