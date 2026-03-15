import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductRepository } from '../../../domain/repositories/product.repository';
import { Product } from '../../../core/models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <section class="products-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Fresh Specials</h2>
          <p class="section-subtitle">Picked this morning for your kitchen</p>
        </div>
        
        <div class="grid" *ngIf="products$ | async as products">
          <app-product-card 
            *ngFor="let product of products" 
            [product]="product"
            class="fade-in"
          ></app-product-card>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .products-section {
      padding: var(--spacing-xl) 0;
    }
    .section-header {
      text-align: center;
      margin-bottom: var(--spacing-lg);
    }
    .section-title {
      font-size: 2.5rem;
      color: var(--text-dark);
      margin-bottom: 0.5rem;
    }
    .section-subtitle {
      color: var(--text-muted);
      font-size: 1.1rem;
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: var(--spacing-md);
    }
  `]
})
export class ProductGridComponent implements OnInit {
  private productRepo = inject(ProductRepository);
  products$!: Observable<Product[]>;

  ngOnInit() {
    this.products$ = this.productRepo.getProducts();
  }
}
