import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCarouselComponentFood } from './main-carousel-food.component';

describe('MainCarouselComponent', () => {
  let component: MainCarouselComponentFood;
  let fixture: ComponentFixture<MainCarouselComponentFood>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCarouselComponentFood ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCarouselComponentFood);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
