import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSelectDropdownItemComponent } from './tag-select-dropdown-item.component';

describe('TagSelectDropdownItemComponent', () => {
  let component: TagSelectDropdownItemComponent;
  let fixture: ComponentFixture<TagSelectDropdownItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagSelectDropdownItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagSelectDropdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
