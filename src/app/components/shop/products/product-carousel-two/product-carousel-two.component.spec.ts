import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCarouselTwoComponent } from './product-carousel-two.component';

describe('ProductCarouselTwoComponent', () => {
  let component: ProductCarouselTwoComponent;
  let fixture: ComponentFixture<ProductCarouselTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCarouselTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCarouselTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
