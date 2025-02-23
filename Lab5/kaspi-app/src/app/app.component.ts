import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { categories, products } from './data/store-data';
import { Category, Product } from './models/product.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = categories;
  products = [...products];
  selectedCategory: Category | null = null;
  selectedParentCategory: Category | null = null;

  get mainCategories(): Category[] {
    return this.categories.filter(c => !c.parentId);
  }

  get subCategories(): Category[] {
    const parentCategory = this.selectedParentCategory;
    if (!parentCategory) return [];
    const parentId = parentCategory.id;
    return this.categories.filter(c => c.parentId === parentId);
  }

  get filteredProducts(): Product[] {
    const category = this.selectedCategory;
    if (!category) return [];
    const categoryId = category.id;
    return this.products.filter(p => p.categoryId === categoryId);
  }

  selectCategory(category: Category) {
    if (category.id === 2) {
      this.selectedParentCategory = category;
      this.selectedCategory = null;
    } else {
      this.selectedCategory = category;
      this.selectedParentCategory = null;
    }
  }

  selectSubCategory(category: Category) {
    this.selectedCategory = category;
  }

  onProductLike(productId: number) {
    this.products = this.products.map(p => 
      p.id === productId ? {...p, likes: p.likes + 1} : p
    );
  }

  onProductRemove(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
  }
}
