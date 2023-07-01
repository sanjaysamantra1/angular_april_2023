import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private httpClient: HttpClient) {}

  getPhotos() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/photos');
  }
}
