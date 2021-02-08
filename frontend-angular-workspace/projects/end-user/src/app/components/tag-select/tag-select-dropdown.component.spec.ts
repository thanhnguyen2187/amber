import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSelectDropdownComponent } from './tag-select-dropdown.component';

describe('TagSelectDropdownComponent', () => {
  let component: TagSelectDropdownComponent;
  let fixture: ComponentFixture<TagSelectDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagSelectDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagSelectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
