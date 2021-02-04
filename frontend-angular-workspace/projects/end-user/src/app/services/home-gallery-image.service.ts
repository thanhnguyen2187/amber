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
      source: 'https://img.redbull.com/images/c_crop,x_0,y_88,h_1800,w_3200/c_fill,w_1500,h_1000/q_auto,f_auto/redbullcom/2016/10/14/1331823686966_1/casey-stoner',
      thumbnailSource: 'https://img.redbull.com/images/c_crop,x_0,y_88,h_1800,w_3200/c_fill,w_1500,h_1000/q_auto,f_auto/redbullcom/2016/10/14/1331823686966_1/casey-stoner',
      title: 'Racing',
      alternateText: 'Racing',
    },
    {
      source: 'https://wallpaperaccess.com/full/467615.jpg',
      thumbnailSource: 'https://wallpaperaccess.com/full/467615.jpg',
      title: 'Wheelie',
      alternateText: 'Wheelie',
    },
  ];

  getAll(): Observable<GalleryImage[]> {
    return of(this.galleryImages);
  }

  constructor() { }
}
