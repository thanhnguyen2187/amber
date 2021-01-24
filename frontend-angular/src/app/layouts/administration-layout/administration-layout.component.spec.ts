import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationLayoutComponent } from './administration-layout.component';

describe('AdministrationLayoutComponent', () => {
  let component: AdministrationLayoutComponent;
  let fixture: ComponentFixture<AdministrationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
