import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductZoomFoodComponent } from './product-zoom-food.component';

describe('ProductZoomComponent', () => {
  let component: ProductZoomFoodComponent;
  let fixture: ComponentFixture<ProductZoomFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductZoomFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductZoomFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
