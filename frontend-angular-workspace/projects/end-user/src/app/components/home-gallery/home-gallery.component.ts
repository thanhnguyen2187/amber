import { Component, OnInit } from '@angular/core';
import {
  GalleryImage,
  HomeGalleryImageService
} from '../../services/home-gallery-image.service';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.scss']
})
export class HomeGalleryComponent implements OnInit {

  images: GalleryImage[] = [];

  constructor(
    private homeGalleryImageService: HomeGalleryImageService,
  ) { }

  ngOnInit(): void {
    this
      .homeGalleryImageService
      .getAll()
      .subscribe(
        images => this.images = images
      );
  }

}
