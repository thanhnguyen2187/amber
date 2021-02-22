import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Tag {
  label: string;
  key: string;
}

export enum PhysicalTagStatus {
  unchecked,
  checked,
}

export interface PhysicalTag extends Tag {
  status: PhysicalTagStatus;
}

// TODO: rename the class and the file for more accurate purpose
@Injectable({
  providedIn: 'root'
})
export class AvailableTagService {

  constructor() { }

  getTags(): Observable<Tag[]> {
    return of([
      {
        label: 'For Sale',
        key: 'for-sale',
      },
      {
        label: 'For Rent',
        key: 'for-rent',
      },
      {
        label: 'Manual',
        key: 'manual',
      },
      {
        label: 'Semi-automatic',
        key: 'semi-automatic',
      },
      {
        label: 'Automatic',
        key: 'Automatic',
      },
    ]);
  }

  getPhysicalTags(
    checkedTagKeys: string[],
  ): Observable<PhysicalTag[]> {
    const toPhysicalTag = (tag: Tag): PhysicalTag => ({
      ...tag,
      status: (
        checkedTagKeys.includes(tag.key)
          ? PhysicalTagStatus.checked
          : PhysicalTagStatus.unchecked
      ),
    });

    return (
      this
      .getTags()
      .pipe(
        map(
          tags =>
            tags.map(
              tag => toPhysicalTag(tag)
            )
        )
      )
    );
  }
}
