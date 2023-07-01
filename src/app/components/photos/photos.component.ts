import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  photos: any;
  isLoading!: boolean;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //  this.fetchPhotos();
    this.activatedRoute.data.subscribe((dataFromRoute: any) => {
      this.photos = dataFromRoute.myPhotos; // to be shown in UI
    });
  }
  fetchPhotos() {
    this.isLoading = true;
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/photos')
      .subscribe((response) => {
        this.isLoading = false;
        this.photos = response;
      });
  }
}
