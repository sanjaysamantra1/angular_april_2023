import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { PhotosService } from './photos.service';

@Injectable({
  providedIn: 'root'
})
export class PhotosResolverService implements Resolve<any> {

  constructor(private photosService:PhotosService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.photosService.getPhotos();
  }
}