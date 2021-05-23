import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyStatisticsComponent } from './body-statistics.component';

describe('BodyStatisticsComponent', () => {
  let component: BodyStatisticsComponent;
  let fixture: ComponentFixture<BodyStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
