import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export enum Icons {
  Logo = 'logo',
}
const iconsFolderUrl = '../assets/svg/icons';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {}

  public registerIcon(): void {
    Object.values(Icons).forEach(
      (key) => {
        this.iconRegistry.addSvgIcon(
          key,
          this.sanitizer.bypassSecurityTrustResourceUrl(`${iconsFolderUrl}/${key}.svg`),
        );
      }
    );
  }
}
