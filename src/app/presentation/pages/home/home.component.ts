import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProductGridComponent } from '../../components/product-grid/product-grid.component';
import { CartDrawerComponent } from '../../components/cart-drawer/cart-drawer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    NavbarComponent, 
    HeroComponent, 
    ProductGridComponent, 
    CartDrawerComponent
  ],
  template: `
    <app-navbar (onCartClick)="cartDrawer.open()"></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-product-grid></app-product-grid>
    </main>
    
    <footer class="footer">
      <div class="container footer-content">
        <div class="footer-brand">
          <h3>MumSoko</h3>
          <p>The heartbeat of fresh Kenyan produce.</p>
        </div>
        <div class="footer-links">
           <a href="#">Terms</a>
           <a href="#">Privacy</a>
           <a href="#">Contact</a>
        </div>
        <div class="copyright">
          © {{ currentYear }} MumSoko. All rights reserved.
        </div>
      </div>
    </footer>

    <app-cart-drawer #cartDrawer></app-cart-drawer>
  `,
  styles: [`
    .footer {
      background: var(--text-dark);
      color: var(--white);
      padding: var(--spacing-lg) 0;
      margin-top: var(--spacing-xl);
    }
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: var(--spacing-md);
    }
    .footer-brand h3 { color: var(--accent); margin-bottom: 0.5rem; }
    .footer-brand p { color: #999; font-size: 0.9rem; }
    .footer-links { display: flex; gap: 1.5rem; }
    .footer-links a { color: #ccc; font-size: 0.9rem; }
    .footer-links a:hover { color: var(--accent); }
    .copyright { color: #555; font-size: 0.8rem; width: 100%; border-top: 1px solid #333; padding-top: 2rem; margin-top: 2rem; text-align: center; }
  `]
})
export class HomeComponent {
  @ViewChild('cartDrawer') cartDrawer!: CartDrawerComponent;
  currentYear = new Date().getFullYear();
}
