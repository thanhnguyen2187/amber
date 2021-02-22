import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagSelectDropdownStyleService {

  calculate(
    tagSelectHeight: number,
    availableDropdownHeight: number,
    dropdownHeight: number,
    showDropdown: boolean,
  ): {
    classes: string[],
    styles: {},
  } {
    const classes: string[] = [];
    const styles = {
      top: '',
      bottom: '',
    };

    if (availableDropdownHeight >= dropdownHeight) {
      classes.push('flex-col');
      styles.top = `${tagSelectHeight}px`;
    } else {
      classes.push('flex-col-reverse');
      styles.bottom = `0px`;
    }
    if (showDropdown) {
      classes.push('invisible');
    }

    return {
      classes,
      styles,
    };
  }

  constructor() { }
}
