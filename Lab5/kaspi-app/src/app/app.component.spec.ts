import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CommonModule } from '@angular/common';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, ProductListComponent],
      declarations: []
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show main categories', () => {
    const mainCategories = component.mainCategories;
    expect(mainCategories.length).toBeGreaterThan(0);
    expect(mainCategories.every(c => !c.parentId)).toBeTruthy();
  });

  it('should show subcategories when electronics is selected', () => {
    const electronics = component.categories.find(c => c.id === 2);
    if (electronics) {
      component.selectCategory(electronics);
      expect(component.subCategories.length).toBeGreaterThan(0);
      expect(component.subCategories.every(c => c.parentId === 2)).toBeTruthy();
    }
  });

  it('should filter products by category', () => {
    const category = component.categories[0];
    component.selectCategory(category);
    expect(component.filteredProducts.every(p => p.categoryId === category.id)).toBeTruthy();
  });

  it('should increment likes', () => {
    const productId = 1;
    const initialLikes = component.products.find(p => p.id === productId)?.likes || 0;
    component.onProductLike(productId);
    const updatedLikes = component.products.find(p => p.id === productId)?.likes || 0;
    expect(updatedLikes).toBe(initialLikes + 1);
  });

  it('should remove product', () => {
    const productId = 1;
    const initialLength = component.products.length;
    component.onProductRemove(productId);
    expect(component.products.length).toBe(initialLength - 1);
    expect(component.products.find(p => p.id === productId)).toBeUndefined();
  });
});
