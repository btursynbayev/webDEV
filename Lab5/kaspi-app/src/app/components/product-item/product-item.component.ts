import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();

  onLike() {
    this.like.emit(this.product.id);
  }

  onRemove() {
    this.remove.emit(this.product.id);
  }

  shareProduct(link: string) {
    const message = `Check out this product: ${link}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
    window.open(telegramUrl, '_blank');
  }

  goToKaspi(link: string) {
    window.open(link, '_blank');
  }
} 