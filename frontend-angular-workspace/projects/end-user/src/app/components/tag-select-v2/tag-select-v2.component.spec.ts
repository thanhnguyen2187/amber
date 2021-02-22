import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSelectV2Component } from './tag-select-v2.component';

describe('TagSelectV2Component', () => {
  let component: TagSelectV2Component;
  let fixture: ComponentFixture<TagSelectV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagSelectV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagSelectV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
