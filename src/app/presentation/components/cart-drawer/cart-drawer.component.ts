import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../core/services/cart.service';
import { PaymentService } from '../../../core/services/payment.service';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="overlay" [class.active]="isOpen()" (click)="close()"></div>
    <div class="drawer" [class.active]="isOpen()">
      <div class="drawer-header">
        <h2>Your Basket</h2>
        <button class="close-btn" (click)="close()">✕</button>
      </div>

      <div class="drawer-content">
        <div *ngIf="cartService.items().length === 0" class="empty-state">
           <span class="empty-icon">🧺</span>
           <p>Your basket is empty</p>
           <button class="btn-primary" (click)="close()">Start Shopping</button>
        </div>

        <div *ngFor="let item of cartService.items()" class="cart-item">
          <img [src]="item.product.imageUrl" [alt]="item.product.name" class="item-img">
          <div class="item-details">
            <h4>{{ item.product.name }}</h4>
            <span class="item-price">KSh {{ item.product.price }}</span>
            <div class="quantity-controls">
              <button (click)="updateQuantity(item.product.id, item.quantity - 1)">-</button>
              <span>{{ item.quantity }}</span>
              <button (click)="updateQuantity(item.product.id, item.quantity + 1)">+</button>
            </div>
          </div>
          <button class="remove-btn" (click)="cartService.removeFromCart(item.product.id)">🗑️</button>
        </div>
      </div>

      <div class="drawer-footer" *ngIf="cartService.items().length > 0">
        <div class="total-row">
          <span>Total</span>
          <span class="grand-total">KSh {{ cartService.totalAmount() }}</span>
        </div>
        <button 
          class="btn-primary checkout-btn" 
          (click)="checkout()" 
          [disabled]="paymentService.isProcessing()">
          {{ paymentService.isProcessing() ? 'Processing...' : 'Checkout Now' }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(4px);
      z-index: 2000;
      opacity: 0;
      pointer-events: none;
      transition: var(--transition-smooth);
    }
    .overlay.active { opacity: 1; pointer-events: all; }

    .drawer {
      position: fixed;
      top: 0;
      right: -100%;
      width: 400px;
      height: 100%;
      background: white;
      z-index: 2001;
      padding: var(--spacing-md);
      transition: var(--transition-smooth);
      display: flex;
      flex-direction: column;
      box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
    }
    @media (max-width: 500px) { .drawer { width: 100%; } }
    .drawer.active { right: 0; }

    .drawer-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--spacing-md);
    }
    .close-btn { font-size: 1.5rem; color: var(--text-muted); }

    .drawer-content {
      flex: 1;
      overflow-y: auto;
    }

    .empty-state {
      text-align: center;
      padding: var(--spacing-lg) 0;
    }
    .empty-icon { font-size: 4rem; display: block; margin-bottom: 1rem; }

    .cart-item {
      display: flex;
      gap: 1rem;
      padding: 1rem 0;
      border-bottom: 2px dashed var(--border);
      align-items: center;
    }
    .item-img { width: 70px; height: 70px; object-fit: cover; border-radius: 12px; }
    .item-details { flex: 1; }
    .item-details h4 { margin-bottom: 0.2rem; }
    .item-price { color: var(--primary); font-weight: 700; display: block; margin-bottom: 0.5rem; }

    .quantity-controls {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: var(--surface);
      width: fit-content;
      padding: 0.3rem 0.8rem;
      border-radius: 8px;
    }
    .quantity-controls button { font-weight: 700; color: var(--primary); }

    .remove-btn { font-size: 1.2rem; opacity: 0.6; }
    .remove-btn:hover { opacity: 1; }

    .drawer-footer {
      padding-top: var(--spacing-md);
      border-top: 1px solid var(--border);
    }
    .total-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      font-size: 1.2rem;
      font-weight: 700;
    }
    .grand-total { color: var(--primary); font-size: 1.5rem; }
    .checkout-btn { width: 100%; justify-content: center; height: 60px; font-size: 1.1rem; }
  `]
})
export class CartDrawerComponent {
  cartService = inject(CartService);
  paymentService = inject(PaymentService);
  isOpen = signal(false);

  open() { this.isOpen.set(true); }
  close() { this.isOpen.set(false); }

  updateQuantity(productId: string, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
  }

  checkout() {
    const total = this.cartService.totalAmount();
    // In a real app, we'd get the user's email. For this demo, using a placeholder.
    const email = 'customer@example.com'; 

    this.paymentService.payWithPaystack(
      email,
      total,
      (response) => {
        alert('Payment Successful! Reference: ' + response.reference);
        this.cartService.clearCart();
        this.close();
      },
      () => {
        console.log('Payment cancelled');
      }
    );
  }
}
