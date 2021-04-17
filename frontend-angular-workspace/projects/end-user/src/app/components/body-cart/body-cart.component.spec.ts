import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCartComponent } from './body-cart.component';

describe('BodyCartComponent', () => {
  let component: BodyCartComponent;
  let fixture: ComponentFixture<BodyCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
