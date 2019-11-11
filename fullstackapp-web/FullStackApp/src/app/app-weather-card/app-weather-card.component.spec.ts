import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWeatherCardComponent } from './app-weather-card.component';

describe('AppWeatherCardComponent', () => {
  let component: AppWeatherCardComponent;
  let fixture: ComponentFixture<AppWeatherCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWeatherCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
