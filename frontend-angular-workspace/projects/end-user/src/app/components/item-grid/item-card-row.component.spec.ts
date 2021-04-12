import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardRowComponent } from './item-card-row.component';

describe('ItemCardRowComponent', () => {
  let component: ItemCardRowComponent;
  let fixture: ComponentFixture<ItemCardRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCardRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
