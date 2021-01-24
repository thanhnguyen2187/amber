import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndUserLayoutComponent } from './end-user-layout.component';

describe('EndUserLayoutComponent', () => {
  let component: EndUserLayoutComponent;
  let fixture: ComponentFixture<EndUserLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndUserLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndUserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
