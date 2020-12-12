import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCarouselIndustrialComponent } from './main-carousel-industrial.component';

describe('MainCarouselComponent', () => {
  let component: MainCarouselIndustrialComponent;
  let fixture: ComponentFixture<MainCarouselIndustrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCarouselIndustrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCarouselIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
