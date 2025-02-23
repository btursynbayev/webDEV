export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  likes: number;
  categoryId: number;
  rating: number;
  link: string;
  gallery: string[];
}

export interface Category {
  id: number;
  name: string;
  parentId?: number; // для подкатегорий
} 