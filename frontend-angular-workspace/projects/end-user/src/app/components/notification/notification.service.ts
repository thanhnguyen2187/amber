import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  display$: Subject<boolean> = new Subject<boolean>();
  title$: Subject<string> = new Subject<string>();
  content$: Subject<string> = new Subject<string>();

  notify(
    title: string,
    content: string,
  ): void {
    this.display$.next();
    this.title$.next(title);
    this.content$.next(content);
  }

  constructor() { }
}
