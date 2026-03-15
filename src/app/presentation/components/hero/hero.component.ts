import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero fade-in">
      <div class="container hero-content">
        <div class="hero-text">
          <span class="badge">Fresh from Local Farms</span>
          <h1>Premium Vegetables <br> <span class="highlight">Grown for You</span></h1>
          <p>MumSoko brings the finest, organic Kenyan produce directly to your kitchen. Support local women farmers while eating healthy.</p>
          <div class="hero-actions">
            <button class="btn-primary">Shop Now <span>→</span></button>
            <button class="btn-outline">Learn More</button>
          </div>
        </div>
        <div class="hero-image-container">
          <div class="image-wrapper">
             <img src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=1000&auto=format&fit=crop" alt="Fresh Vegetables" class="hero-img">
             <div class="floating-card c1">
                <span>🥕</span>
                <div>
                  <strong>Organic</strong>
                  <p>100% Certified</p>
                </div>
             </div>
             <div class="floating-card c2">
                <span>📍</span>
                <div>
                  <strong>Local</strong>
                  <p>Kiambu Farms</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: var(--spacing-lg) 0;
      background: linear-gradient(180deg, #F3ECDC 0%, var(--surface) 100%);
      overflow: hidden;
    }
    .hero-content {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      align-items: center;
      gap: var(--spacing-lg);
    }
    .badge {
      display: inline-block;
      padding: 0.5rem 1.2rem;
      background: rgba(232, 122, 93, 0.1);
      color: var(--accent);
      border-radius: 50px;
      font-weight: 600;
      font-size: 0.9rem;
      margin-bottom: var(--spacing-sm);
    }
    h1 {
      font-size: 4rem;
      color: var(--text-dark);
      margin-bottom: var(--spacing-sm);
    }
    .highlight {
      color: var(--primary);
      position: relative;
    }
    p {
      font-size: 1.2rem;
      color: var(--text-muted);
      max-width: 500px;
      margin-bottom: var(--spacing-md);
    }
    .hero-actions {
      display: flex;
      gap: var(--spacing-sm);
    }
    .btn-outline {
      padding: 0.8rem 2rem;
      border: 2px solid var(--primary);
      color: var(--primary);
      border-radius: 50px;
      font-weight: 600;
    }
    .btn-outline:hover {
      background: var(--primary);
      color: white;
    }
    
    .hero-image-container {
      position: relative;
    }
    .image-wrapper {
      position: relative;
      border-radius: 30px;
      overflow: visible;
    }
    .hero-img {
      width: 100%;
      height: 500px;
      object-fit: cover;
      border-radius: 30px;
      box-shadow: var(--shadow-medium);
    }
    
    .floating-card {
      position: absolute;
      background: white;
      padding: 1rem;
      border-radius: 20px;
      box-shadow: var(--shadow-medium);
      display: flex;
      align-items: center;
      gap: 0.8rem;
      animation: float 4s ease-in-out infinite;
    }
    .c1 { top: 20%; left: -10%; }
    .c2 { bottom: 15%; right: -5%; animation-delay: 2s; }
    
    .floating-card span { font-size: 1.5rem; }
    .floating-card strong { display: block; font-size: 0.9rem; }
    .floating-card p { margin: 0; font-size: 0.75rem; color: var(--text-muted); }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }

    @media (max-width: 968px) {
      .hero-content { grid-template-columns: 1fr; text-align: center; }
      h1 { font-size: 2.5rem; }
      p { margin: 0 auto 2rem; }
      .hero-actions { justify-content: center; }
      .floating-card { display: none; }
    }
  `]
})
export class HeroComponent {}
