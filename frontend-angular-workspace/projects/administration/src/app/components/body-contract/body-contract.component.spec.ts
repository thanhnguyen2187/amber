import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyContractComponent } from './body-contract.component';

describe('BodyContractComponent', () => {
  let component: BodyContractComponent;
  let fixture: ComponentFixture<BodyContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
