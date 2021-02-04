import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyForRentComponent } from './body-for-rent.component';

describe('ForRentContentComponent', () => {
  let component: BodyForRentComponent;
  let fixture: ComponentFixture<BodyForRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyForRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyForRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
