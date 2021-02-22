import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBodyWithCoverComponent } from './layout-body-with-cover.component';

describe('LayoutBodyWithCoverComponent', () => {
  let component: LayoutBodyWithCoverComponent;
  let fixture: ComponentFixture<LayoutBodyWithCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutBodyWithCoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutBodyWithCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
