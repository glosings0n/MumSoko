import { Observable } from 'rxjs';
import { Product } from '../../core/models/product.model';

export abstract class ProductRepository {
  abstract getProducts(): Observable<Product[]>;
  abstract getProductById(id: string): Observable<Product | undefined>;
  abstract getFeaturedProducts(): Observable<Product[]>;
}
