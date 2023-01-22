import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCategoriesComponent } from './layout-categories.component';

describe('LayoutCategoriesComponent', () => {
  let component: LayoutCategoriesComponent;
  let fixture: ComponentFixture<LayoutCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
