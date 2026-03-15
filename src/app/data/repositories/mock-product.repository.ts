import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../core/models/product.model';
import { ProductRepository } from '../../domain/repositories/product.repository';

@Injectable({
  providedIn: 'root'
})
export class MockProductRepository implements ProductRepository {
  private products: Product[] = [
    {
      id: '1',
      name: 'Fresh Sukuma Wiki',
      description: 'Organic kale freshly harvested from the highlands of Kiambu. Packed with vitamins.',
      price: 50,
      unit: 'bundle',
      category: 'Vegetables',
      imageUrl: '/images/products/sukuma-wiki.png',
      isFeatured: true
    },
    {
      id: '2',
      name: 'Red Bulb Onions',
      description: 'Crispy and flavorful red onions, essential for any Kenyan stew.',
      price: 120,
      unit: 'kg',
      category: 'Vegetables',
      imageUrl: '/images/products/red-onions.png',
      isFeatured: true
    },
    {
      id: '3',
      name: 'Organic Spinach',
      description: 'Lush green spinach, grown without synthetic pesticides.',
      price: 45,
      unit: 'bundle',
      category: 'Vegetables',
      imageUrl: '/images/products/spinach.png',
      isFeatured: true
    },
    {
      id: '4',
      name: 'Ripe Tomatoes',
      description: 'Firm and juicy tomatoes, perfect for kachumbari.',
      price: 80,
      unit: 'kg',
      category: 'Vegetables',
      imageUrl: '/images/products/tomatoes.png',
      isFeatured: false
    },
    {
      id: '5',
      name: 'Fresh Carrots',
      description: 'Sweet and crunchy carrots, high in beta-carotene.',
      price: 70,
      unit: 'kg',
      category: 'Vegetables',
      imageUrl: '/images/products/carrots.png',
      isFeatured: false
    },
    {
      id: '6',
      name: 'Green Capsicum',
      description: 'Fresh hoho (bell peppers) to add aroma and flavor to your meals.',
      price: 30,
      unit: 'pc',
      category: 'Vegetables',
      imageUrl: '/images/products/green-capsicum.png',
      isFeatured: true
    }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: string): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }

  getFeaturedProducts(): Observable<Product[]> {
    return of(this.products.filter(p => p.isFeatured));
  }
}
