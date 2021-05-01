import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyBikeDetailsComponent } from './body-bike-details.component';

describe('BodyBikeDetailComponent', () => {
  let component: BodyBikeDetailsComponent;
  let fixture: ComponentFixture<BodyBikeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyBikeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyBikeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
