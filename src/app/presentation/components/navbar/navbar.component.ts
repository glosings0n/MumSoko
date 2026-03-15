import { Component, inject, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar">
      <div class="container nav-content">
        <a href="/" class="logo">
          <span class="logo-text">Mum</span><span class="logo-accent">Soko</span>
        </a>
        
        <div class="nav-links">
          <a href="#" class="nav-link">Home</a>
          <a href="#" class="nav-link">Shop</a>
          <a href="#" class="nav-link">About</a>
        </div>

        <button class="cart-btn" (click)="onCartClick.emit()">
          <span class="cart-icon">🛒</span>
          <span class="cart-count" *ngIf="cartService.totalQuantity() > 0">
            {{ cartService.totalQuantity() }}
          </span>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      height: 80px;
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(10px);
      position: sticky;
      top: 0;
      z-index: 1000;
      border-bottom: 1px solid var(--border);
    }
    .nav-content {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      font-size: 1.8rem;
      font-weight: 800;
      letter-spacing: -1px;
    }
    .logo-text { color: var(--primary); }
    .logo-accent { color: var(--accent); }
    
    .nav-links {
      display: flex;
      gap: var(--spacing-md);
    }
    .nav-link {
      font-weight: 500;
      color: var(--text-muted);
    }
    .nav-link:hover {
      color: var(--primary);
    }
    
    .cart-btn {
      position: relative;
      background: var(--secondary);
      width: 45px;
      height: 45px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }
    .cart-count {
      position: absolute;
      top: -5px;
      right: -5px;
      background: var(--accent);
      color: white;
      font-size: 0.75rem;
      font-weight: 700;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid white;
    }
  `]
})
export class NavbarComponent {
  cartService = inject(CartService);
  @Output() onCartClick = new EventEmitter<void>();
}
