import {
  Component, Input,
  OnInit,
} from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

import {
  CoverImage,
  HomeGalleryImageService,
} from '../../services/home-gallery-image.service';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition('* => *', [
        style({opacity: 0}),
        animate('500ms', style({opacity: 1})),
      ]),
    ]),
  ],
})
export class HomeGalleryComponent implements OnInit {

  animatingToggle = true;

  currentImageIndex = 0;
  @Input() images: CoverImage[] = [];

  autoSkipIntervalId = 0;
  autoSkipIntervalTimeout = 5000;

  applyLightboxStyles = false;
  lightboxStyles = {
    // opacity: 50,
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100vw',
    height: '100vh',
    zIndex: 10,
  };

  constructor(
  ) { }

  ngOnInit(): void {
    this.clearInterval();
    this.startInterval();
  }

  clearInterval(): void {
    if (this.autoSkipIntervalId) {
      // looks like an unlimited recursive function but actually is not
      clearInterval(this.autoSkipIntervalId);
    }
  }

  startInterval(): void {
    this.autoSkipIntervalId = setInterval(
      () => {
        this.currentImageIndex = (
          (this.currentImageIndex + 1)
          % this.images.length
        );
        this.animatingToggle = !this.animatingToggle;
      },
      this.autoSkipIntervalTimeout,
    );
  }

  increaseImageIndex(): void {
    this.currentImageIndex = (
      (this.currentImageIndex + 1)
      % this.images.length
    );
    this.animatingToggle = !this.animatingToggle;
    this.clearInterval();
    this.startInterval();
  }

  decreaseImageIndex(): void {
    this.currentImageIndex = (
      (this.currentImageIndex - 1 + this.images.length)
      % this.images.length
    );
    this.animatingToggle = !this.animatingToggle;
    this.clearInterval();
    this.startInterval();
  }

  setImageIndex(imageIndex: number): void {
    this.currentImageIndex = imageIndex;
    this.animatingToggle = !this.animatingToggle;
    this.clearInterval();
    this.startInterval();
  }
}
