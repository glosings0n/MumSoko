import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';
import { CartItem, CartState } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private state = signal<CartState>({
    items: [],
    totalAmount: 0,
    totalQuantity: 0
  });

  items = computed(() => this.state().items);
  totalAmount = computed(() => this.state().totalAmount);
  totalQuantity = computed(() => this.state().totalQuantity);

  addToCart(product: Product) {
    const currentItems = this.state().items;
    const existingItemIndex = currentItems.findIndex(item => item.product.id === product.id);

    let updatedItems: CartItem[];

    if (existingItemIndex > -1) {
      updatedItems = currentItems.map((item, index) => 
        index === existingItemIndex 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedItems = [...currentItems, { product, quantity: 1 }];
    }

    this.updateState(updatedItems);
  }

  removeFromCart(productId: string) {
    const updatedItems = this.state().items.filter(item => item.product.id !== productId);
    this.updateState(updatedItems);
  }

  updateQuantity(productId: string, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    const updatedItems = this.state().items.map(item =>
      item.product.id === productId ? { ...item, quantity } : item
    );
    this.updateState(updatedItems);
  }

  private updateState(items: CartItem[]) {
    const totalAmount = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

    this.state.set({
      items,
      totalAmount,
      totalQuantity
    });
  }

  clearCart() {
    this.state.set({
      items: [],
      totalAmount: 0,
      totalQuantity: 0
    });
  }
}
