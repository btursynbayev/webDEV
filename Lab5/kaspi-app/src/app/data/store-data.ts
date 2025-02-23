import { Category, Product } from '../models/product.interface';

export const categories: Category[] = [
  { id: 1, name: 'Phones' },
  { id: 2, name: 'Electronics' },
  // Подкатегории электроники
  { id: 21, name: 'Laptops', parentId: 2 },
  { id: 22, name: 'Headphones', parentId: 2 },
  { id: 23, name: 'Smartwatches', parentId: 2 },
  { id: 3, name: 'Books' },
  { id: 4, name: 'Clothing' },
  { id: 5, name: 'Sports' }
];

export const products: Product[] = [
  // Samsung Phones
  {
    id: 1,
    categoryId: 1,
    name: 'Samsung Galaxy S24 Ultra 1TB',
    price: 1599,
    description: 'Смартфон Samsung Galaxy S24 Ultra 1TB титан черный',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
    likes: 0,
    rating: 4.9,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000',
    gallery: ['https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium']
  },
  {
    id: 2,
    categoryId: 1,
    name: 'Samsung Galaxy S24 Plus 512GB',
    price: 1299,
    description: 'Смартфон Samsung Galaxy S24 Plus 512GB черный',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
    likes: 0,
    rating: 4.8,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000',
    gallery: ['https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium']
  },
  // iPhone
  {
    id: 3,
    categoryId: 1,
    name: 'Apple iPhone 15 Pro Max 256GB',
    price: 1499,
    description: 'Смартфон Apple iPhone 15 Pro Max 256GB серый титан',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h55/he9/86319872344094.jpg?format=gallery-medium',
    likes: 0,
    rating: 5.0,
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-sinii-113138428/?c=750000000',
    gallery: ['https://resources.cdn-kaspi.kz/img/m/p/h55/he9/86319872344094.jpg?format=gallery-medium']
  },
  {
    id: 4,
    categoryId: 1,
    name: 'Apple iPhone 15 Pro 256GB',
    price: 1299,
    description: 'Смартфон Apple iPhone 15 Pro 256GB серый титан',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd8/hfc/86302547968030.jpg?format=gallery-medium',
    likes: 0,
    rating: 4.9,
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-belyi-113138285/?c=750000000',
    gallery: ['https://resources.cdn-kaspi.kz/img/m/p/hd8/hfc/86302547968030.jpg?format=gallery-medium']
  },
  // Xiaomi
  {
    id: 5,
    categoryId: 1,
    name: 'Xiaomi Redmi 13C 8 ГБ/256 ГБ',
    price: 299,
    description: 'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h67/h01/84526692565022.png?format=gallery-medium',
    likes: 0,
    rating: 4.6,
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-sinii-114695505/?c=750000000',
    gallery: ['https://resources.cdn-kaspi.kz/img/m/p/h67/h01/84526692565022.png?format=gallery-medium']
  },
  // Electronics - Laptops
  {
    id: 6,
    categoryId: 21,
    name: 'Apple MacBook Air 13 M1',
    price: 999,
    description: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium',
    likes: 0,
    rating: 4.8,
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000',
    gallery: ['https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium']
  },
  {
    id: 7,
    categoryId: 2,
    name: 'ASUS ROG Strix G16',
    price: 1299,
    description: 'Ноутбук ASUS ROG Strix G16 G614JI-N3163',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h88/h39/84941601816606.jpg?format=gallery-medium',
    likes: 0,
    rating: 4.7,
    link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-g614ji-n3163-90nr0c11-m00770-chernyi-115970312/?c=750000000',
    gallery: ['https://resources.cdn-kaspi.kz/img/m/p/h88/h39/84941601816606.jpg?format=gallery-medium']
  },
  // Electronics - Headphones
  {
    id: 8,
    categoryId: 22,
    name: 'Apple AirPods Pro 2',
    price: 249,
    description: 'Наушники Apple AirPods Pro 2nd generation with Wireless MagSafe Charging Case',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
    likes: 0,
    rating: 4.9,
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
    gallery: ['https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium']
  },
  // Electronics - Smartwatches
  {
    id: 9,
    categoryId: 23,
    name: 'Apple Watch Series 9',
    price: 399,
    description: 'Смарт-часы Apple Watch Series 9 GPS M/L черный',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/84573235601438.jpg?format=gallery-medium',
    likes: 0,
    rating: 4.8,
    link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-chernyi-113398437/?c=750000000',
    gallery: ['https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/84573235601438.jpg?format=gallery-medium']
  },

  // Books
  {
    id: 8,
    categoryId: 3,
    name: 'Novel',
    price: 15,
    description: 'Bestseller',
    image: 'novel.jpg',
    likes: 0,
    rating: 4.2,
    link: 'https://example.com/novel',
    gallery: ['novel.jpg']
  },
  {
    id: 9,
    categoryId: 3,
    name: 'Cookbook',
    price: 25,
    description: 'Recipes',
    image: 'cookbook.jpg',
    likes: 0,
    rating: 4.5,
    link: 'https://example.com/cookbook',
    gallery: ['cookbook.jpg']
  },
  {
    id: 10,
    categoryId: 3,
    name: 'Science Book',
    price: 30,
    description: 'Educational',
    image: 'science.jpg',
    likes: 0,
    rating: 4.7,
    link: 'https://example.com/science',
    gallery: ['science.jpg']
  },
  {
    id: 11,
    categoryId: 3,
    name: 'History Book',
    price: 20,
    description: 'World History',
    image: 'history.jpg',
    likes: 0,
    rating: 4.4,
    link: 'https://example.com/history',
    gallery: ['history.jpg']
  },
  {
    id: 12,
    categoryId: 3,
    name: 'Comic Book',
    price: 10,
    description: 'Superhero',
    image: 'comic.jpg',
    likes: 0,
    rating: 4.8,
    link: 'https://example.com/comic',
    gallery: ['comic.jpg']
  },

  // Clothing
  {
    id: 13,
    categoryId: 4,
    name: 'T-Shirt',
    price: 20,
    description: 'Cotton',
    image: 'tshirt.jpg',
    likes: 0,
    rating: 4.3,
    link: 'https://example.com/tshirt',
    gallery: ['tshirt.jpg']
  },
  {
    id: 14,
    categoryId: 4,
    name: 'Jeans',
    price: 50,
    description: 'Denim',
    image: 'jeans.jpg',
    likes: 0,
    rating: 4.6,
    link: 'https://example.com/jeans',
    gallery: ['jeans.jpg']
  },
  {
    id: 15,
    categoryId: 4,
    name: 'Jacket',
    price: 80,
    description: 'Winter',
    image: 'jacket.jpg',
    likes: 0,
    rating: 4.5,
    link: 'https://example.com/jacket',
    gallery: ['jacket.jpg']
  },
  {
    id: 16,
    categoryId: 4,
    name: 'Shoes',
    price: 60,
    description: 'Sneakers',
    image: 'shoes.jpg',
    likes: 0,
    rating: 4.4,
    link: 'https://example.com/shoes',
    gallery: ['shoes.jpg']
  },
  {
    id: 17,
    categoryId: 4,
    name: 'Hat',
    price: 15,
    description: 'Baseball cap',
    image: 'hat.jpg',
    likes: 0,
    rating: 4.2,
    link: 'https://example.com/hat',
    gallery: ['hat.jpg']
  },

  // Sports
  {
    id: 18,
    categoryId: 5,
    name: 'Basketball',
    price: 25,
    description: 'Official size',
    image: 'basketball.jpg',
    likes: 0,
    rating: 4.7,
    link: 'https://example.com/basketball',
    gallery: ['basketball.jpg']
  },
  {
    id: 19,
    categoryId: 5,
    name: 'Tennis Racket',
    price: 100,
    description: 'Professional',
    image: 'racket.jpg',
    likes: 0,
    rating: 4.6,
    link: 'https://example.com/racket',
    gallery: ['racket.jpg']
  },
  {
    id: 20,
    categoryId: 5,
    name: 'Football',
    price: 30,
    description: 'Soccer ball',
    image: 'football.jpg',
    likes: 0,
    rating: 4.5,
    link: 'https://example.com/football',
    gallery: ['football.jpg']
  },
  {
    id: 21,
    categoryId: 5,
    name: 'Yoga Mat',
    price: 20,
    description: 'Non-slip',
    image: 'yoga.jpg',
    likes: 0,
    rating: 4.4,
    link: 'https://example.com/yoga',
    gallery: ['yoga.jpg']
  },
  {
    id: 22,
    categoryId: 5,
    name: 'Dumbbells',
    price: 40,
    description: '5kg pair',
    image: 'dumbbells.jpg',
    likes: 0,
    rating: 4.3,
    link: 'https://example.com/dumbbells',
    gallery: ['dumbbells.jpg']
  }
];
