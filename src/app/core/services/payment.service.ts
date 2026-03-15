import { Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';

declare const PaystackPop: any;

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private publicKey = environment.paystackPublicKey;
  isProcessing = signal(false);

  payWithPaystack(email: string, amount: number, callback: (ref: any) => void, onCancel: () => void) {
    this.isProcessing.set(true);
    
    const handler = PaystackPop.setup({
      key: this.publicKey,
      email: email,
      amount: amount * 100, // Paystack expects amount in kobo/cents
      currency: 'KES',
      ref: 'MS-' + Math.floor((Math.random() * 1000000000) + 1), // Generate a random reference
      callback: (response: any) => {
        this.isProcessing.set(false);
        callback(response);
      },
      onClose: () => {
        this.isProcessing.set(false);
        onCancel();
      }
    });

    handler.openIframe();
  }
}
