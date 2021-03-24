import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

export class SettingItem {
  key = '';
  value$ = new BehaviorSubject<string>('');
  // tslint:disable-next-line:variable-name
  _values: string[] = [];
  set value(newValue) {
    this.value$.next(newValue);
  }
  get value(): string {
    return this._values[this._values.length - 1];
  }
  displayText = '';
  editingState: 'editing' | 'closed' = 'closed';

  resetValue(): void {
    if (this._values.length > 1) {
      this._values.pop();
    }
  }

  saveValue(): void {
    if (this._values.length > 1) {
      this._values = [
        this._values[this._values.length - 1]
      ];
    }
  }

  constructor(
    {
      key,
      value,
      displayText,
    }: {
      key: string,
      value: string,
      displayText: string,
    }
  ) {
    this.key = key;
    this.value = value;
    this.displayText = displayText;

    this
    .value$
    .pipe(
      debounceTime(500),
    )
    .subscribe(
      (newValue) => {
        this._values.push(newValue);
      }
    );
  }
}
