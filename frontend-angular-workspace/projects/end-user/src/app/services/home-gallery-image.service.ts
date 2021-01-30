import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface GalleryImage {
  source: string;
  thumbnailSource: string;
  title: string;
  alternateText: string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeGalleryImageService {

  galleryImages: GalleryImage[] = [
    {
      source: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.15752-9/101948311_581310539195339_3679346352084353253_n.jpg?_nc_cat=106&ccb=2&_nc_sid=ae9488&_nc_ohc=nDX7mAtSw1UAX-XHEAX&_nc_ht=scontent-hkt1-1.xx&oh=26e5f4fd25e21b0ff99e57d61199cd05&oe=6038097B',
      thumbnailSource: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.15752-9/101948311_581310539195339_3679346352084353253_n.jpg?_nc_cat=106&ccb=2&_nc_sid=ae9488&_nc_ohc=nDX7mAtSw1UAX-XHEAX&_nc_ht=scontent-hkt1-1.xx&oh=26e5f4fd25e21b0ff99e57d61199cd05&oe=6038097B',
      title: 'Motorcycle',
      alternateText: 'Motorcycle',
    },
    {
      source: 'https://ridermagazine.com/wp-content/uploads/2019/08/2020-Aprilia-RS-660-3qtr.jpg',
      thumbnailSource: 'https://ridermagazine.com/wp-content/uploads/2019/08/2020-Aprilia-RS-660-3qtr.jpg',
      title: 'Wheelie',
      alternateText: 'Wheelie',
    },
  ];

  getAll(): Observable<GalleryImage[]> {
    return of(this.galleryImages);
  }

  constructor() { }
}
