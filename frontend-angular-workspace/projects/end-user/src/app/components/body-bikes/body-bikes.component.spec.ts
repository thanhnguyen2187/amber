import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyBikesComponent } from './body-bikes.component';

describe('ForRentContentComponent', () => {
  let component: BodyBikesComponent;
  let fixture: ComponentFixture<BodyBikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyBikesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
