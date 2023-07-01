import { TestBed } from '@angular/core/testing';

import { PhotosResolverService } from './photos-resolver.service';

describe('PhotosResolverService', () => {
  let service: PhotosResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotosResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
