import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyServicesComponent } from './body-services.component';

describe('BodyServicesComponent', () => {
  let component: BodyServicesComponent;
  let fixture: ComponentFixture<BodyServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
