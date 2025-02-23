import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  link: string;
  gallery: string[];
  brand: string;
  liked?: boolean;
  inCart?: boolean;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      description: 'Флагманский смартфон от Apple',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-medium',
      rating: 4.8,
      link: 'https://kaspi.kz/',
      gallery: ['assets/iphone1.jpg', 'assets/iphone2.jpg'],
      brand: 'Apple'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      description: 'Топовый телефон от Samsung',
      image: 'assets/samsung.jpg',
      rating: 4.7,
      link: 'https://kaspi.kz/',
      gallery: ['assets/samsung1.jpg', 'assets/samsung2.jpg'],
      brand: 'Samsung'
    }
  ];

  filteredProducts: Product[] = [];
  cart: Product[] = [];
  favorites: Product[] = [];
  selectedBrand: string = 'all';

  ngOnInit() {
    this.loadData();
    this.applyFilter();
  }

  applyFilter() {
    if (this.selectedBrand === 'all') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(p => p.brand === this.selectedBrand);
    }
  }

  toggleLike(product: Product) {
    product.liked = !product.liked;
    this.updateStorage();
  }

  addToCart(product: Product) {
    product.inCart = true;
    this.cart.push(product);
    this.updateStorage();
  }

  removeFromCart(product: Product) {
    product.inCart = false;
    this.cart = this.cart.filter(p => p.id !== product.id);
    this.updateStorage();
  }

  updateStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    localStorage.setItem('favorites', JSON.stringify(this.products.filter(p => p.liked)));
  }

  loadData() {
    const savedCart = localStorage.getItem('cart');
    const savedFavorites = localStorage.getItem('favorites');

    if (savedCart) {
      this.cart = JSON.parse(savedCart);
      this.cart.forEach(item => {
        const prod = this.products.find(p => p.id === item.id);
        if (prod) prod.inCart = true;
      });
    }

    if (savedFavorites) {
      this.favorites = JSON.parse(savedFavorites);
      this.favorites.forEach(item => {
        const prod = this.products.find(p => p.id === item.id);
        if (prod) prod.liked = true;
      });
    }
  }
}
