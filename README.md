# 🥦 MumSoko

MumSoko is a premium, high-performance e-commerce platform dedicated to providing fresh, high-quality vegetables to the Kenyan market. Built with a focus on visual excellence and seamless user experience, MumSoko bridges the gap between local farmers and urban consumers through a modern digital storefront.

![MumSoko Preview](https://via.placeholder.com/1200x600/2E7D32/FFFFFF?text=MumSoko+-+Fresh+Vegetables+at+Your+Doorstep)

## ✨ Key Features

- **🛍️ Seamless Shopping Experience**: Intuitive product discovery with beautiful, high-resolution imagery.
- **💳 Secure Payments**: Integrated with **PayStack** for safe and reliable transactions using cards or mobile money.
- **📊 Real-time Dashboard**: A comprehensive admin dashboard to track sales, manage inventory, and monitor business performance.
- **📱 Fully Responsive**: A mobile-first design that looks stunning on desktops, tablets, and smartphones.
- **⚡ Performance First**: Powered by Angular 21, ensuring blazing-fast load times and fluid transitions.

## 🛠️ Tech Stack

- **Frontend**: [Angular 21](https://angular.dev/) (latest features, Standalone Components, Signals)
- **Styling**: Vanilla CSS (Premium, custom-craft designs)
- **Backend / DB**: [Firebase](https://firebase.google.com/) (Firestore, Authentication, Hosting)
- **Payments**: [PayStack](https://paystack.com/)
- **Deployment**: [Google Cloud Run](https://cloud.google.com/run) / [Docker](https://www.docker.com/)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [Angular CLI](https://github.com/angular/angular-cli)
- [Firebase CLI](https://firebase.google.com/docs/cli)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/glosings0n/MumSoko.git
   cd MumSoko
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/` in your browser.

### Building for Production

To create an optimized production build:
```bash
npm run build
```
The artifacts will be stored in the `dist/` directory.

## 🚢 Deployment

MumSoko is containerized and ready for cloud deployment.

### Using Docker
```bash
docker build -t mumsoko .
docker run -p 8080:80 mumsoko
```

### Google Cloud Run
Deployment is handled via Google Cloud SDK:
```bash
gcloud run deploy mumsoko --source . --project bwai-nairobi-2026 --region us-central1
```

## 📄 License

This project is private and proprietary. Contact the project owner for licensing information.

## 👨‍💻 Developed By

<div align="center">
  <p><strong>Georges Byona</strong> — Software Engineer & Tech Community Lead</p>
  <p>Connect with me: <a href="https://linktr.ee/glosings0n">@glosings0n</a></p>
</div>

---
*Built with ❤️ for the Kenyan farmers and consumers.*
