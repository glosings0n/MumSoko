import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-card">
      <div class="image-container">
        <img [src]="product.imageUrl" [alt]="product.name" class="product-img">
        <button class="add-btn" (click)="addToCart($event)">
          <span class="plus">+</span>
        </button>
      </div>
      <div class="product-info">
        <div class="category">{{ product.category }}</div>
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-description">{{ product.description }}</p>
        <div class="product-footer">
          <span class="price">KSh {{ product.price }} <small>/ {{ product.unit }}</small></span>
          <button class="details-link" (click)="seeDetails()">Details</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .product-card {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      padding: 0.8rem;
      transition: var(--transition-smooth);
      border: 1px solid var(--border);
    }
    .product-card:hover {
      transform: translateY(-10px);
      box-shadow: var(--shadow-medium);
      border-color: var(--primary-light);
    }
    
    .image-container {
      position: relative;
      height: 200px;
      border-radius: 15px;
      overflow: hidden;
      margin-bottom: 1rem;
    }
    .product-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: var(--transition-smooth);
    }
    .product-card:hover .product-img {
      transform: scale(1.1);
    }
    
    .add-btn {
      position: absolute;
      bottom: 10px;
      right: 10px;
      background: var(--primary);
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--shadow-soft);
      z-index: 2;
    }
    .add-btn:hover {
      background: var(--accent);
      transform: rotate(90deg);
    }
    .plus { font-size: 1.5rem; font-weight: 400; }
    
    .product-info {
      padding: 0.5rem;
    }
    .category {
      font-size: 0.75rem;
      color: var(--accent);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 0.3rem;
    }
    .product-name {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: var(--text-dark);
    }
    .product-description {
      font-size: 0.85rem;
      color: var(--text-muted);
      margin-bottom: 1rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .product-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid var(--border);
      padding-top: 1rem;
    }
    .price {
      font-weight: 800;
      color: var(--primary);
      font-size: 1.1rem;
    }
    .price small {
      font-weight: 400;
      color: var(--text-muted);
      font-size: 0.8rem;
    }
    
    .details-link {
      color: var(--text-muted);
      font-size: 0.85rem;
      font-weight: 600;
      text-decoration: underline;
    }
    .details-link:hover {
      color: var(--primary);
    }
  `]
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  
  cartService = inject(CartService);

  addToCart(event: MouseEvent) {
    event.stopPropagation();
    this.cartService.addToCart(this.product);
  }

  seeDetails() {
    // Navigate to details or open modal
  }
}
