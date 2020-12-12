import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesFurnitureComponent } from './categories-furniture.component';

describe('CategoriesFurnitureComponent', () => {
  let component: CategoriesFurnitureComponent;
  let fixture: ComponentFixture<CategoriesFurnitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesFurnitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
