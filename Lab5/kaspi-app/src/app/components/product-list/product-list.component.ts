import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.interface';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `
    <div class="product-list">
      @for (product of products; track product.id) {
        <app-product-item
          [product]="product"
          (remove)="removeProduct($event)"
          (like)="likeProduct($event)"
        />
      }
    </div>
  `,
  styles: [`
    .product-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      padding: 20px;
    }
  `]
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() like = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  removeProduct(productId: number) {
    this.remove.emit(productId);
  }

  likeProduct(productId: number) {
    this.like.emit(productId);
  }
} 