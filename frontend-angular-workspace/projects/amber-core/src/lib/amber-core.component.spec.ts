import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmberCoreComponent } from './amber-core.component';

describe('AmberCoreComponent', () => {
  let component: AmberCoreComponent;
  let fixture: ComponentFixture<AmberCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmberCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmberCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
