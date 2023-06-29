import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  photos:any;
  isLoading!: boolean;
  
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
   
  }
  fetchPhotos() {
    this.isLoading = true;
    this.httpClient.get('https://jsonplaceholder.typicode.com/photos').subscribe((response) => {
      this.isLoading = false;
      this.photos = response;
    });
  }
}
