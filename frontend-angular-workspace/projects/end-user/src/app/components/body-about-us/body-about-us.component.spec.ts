import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAboutUsComponent } from './body-about-us.component';

describe('AboutUsContentComponent', () => {
  let component: BodyAboutUsComponent;
  let fixture: ComponentFixture<BodyAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyAboutUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
