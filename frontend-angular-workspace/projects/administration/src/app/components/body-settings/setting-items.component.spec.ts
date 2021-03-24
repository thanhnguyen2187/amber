import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingItemsComponent } from './setting-items.component';

describe('SettingItemsComponent', () => {
  let component: SettingItemsComponent;
  let fixture: ComponentFixture<SettingItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
