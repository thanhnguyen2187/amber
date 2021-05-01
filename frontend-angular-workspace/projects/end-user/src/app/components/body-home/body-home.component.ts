import { Component, Input, OnInit } from '@angular/core';
import { CoverImage, HomeGalleryImageService } from '../../services/home-gallery-image.service';

@Component({
  selector: 'app-body-home',
  templateUrl: './body-home.component.html',
  styleUrls: ['./body-home.component.scss']
})
export class BodyHomeComponent implements OnInit {

  images: CoverImage[] = [];

  constructor(
    private homeGalleryImageService: HomeGalleryImageService,
  ) {
    this
    .homeGalleryImageService
    .getAll()
    .subscribe(
      // TODO: CIRCLE WHILE LOADING
      images => this.images = images
    );
  }

  ngOnInit(): void {
  }

}
