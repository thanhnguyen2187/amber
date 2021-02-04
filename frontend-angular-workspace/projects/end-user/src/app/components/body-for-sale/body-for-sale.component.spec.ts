import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyForSaleComponent } from './body-for-sale.component';

describe('ForSaleContentComponent', () => {
  let component: BodyForSaleComponent;
  let fixture: ComponentFixture<BodyForSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyForSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyForSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
