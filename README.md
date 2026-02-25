# 🌍 Rotary International Website - E-commerce Platform

**A modern, responsive humanitarian website with full e-commerce functionality**

---

## 👨‍💻 Developer Information

**Name:** Junaid Ul Haque Sheikh  
**Role:** Web Developer (Intern / Trainee)  
**Location:** Shaheed Makdhoom Bilawal Society, Near Safoora Chowrangi, Karachi, Pakistan

### 📱 Contact (WhatsApp)
- +92 335 9033554
- +92 334 3046525
- +92 332 3605926
- +92 332 0213589
- +92 337 2135310
- +92 336 8068664
- +92 337 0105286

### 🔗 Social Media & Portfolio
- **Facebook:** [Profile](https://www.facebook.com/profile.php?id=100064065330176)
- **YouTube:** [@JunaidUlHaqueSheikh-g3z](https://www.youtube.com/@JunaidUlHaqueSheikh-g3z)
- **TikTok:** [@junaid.ul.haque.s65](https://www.tiktok.com/@junaid.ul.haque.s65)
- **Facebook Group:** [Join](https://www.facebook.com/groups/958910999994384)
- **Fiverr Portfolio:** [View Work](https://www.fiverr.com/users/junaidsheikh000/portfolio)
- **Featured Reel:** [Watch](https://www.facebook.com/reel/1391624955578357)

---

## ✨ Features

### 🛒 E-commerce Functionality
- **Product Catalog** - 6 Rotary merchandise products
- **Add to Cart** - One-click add to cart functionality
- **Cart Management** - View, update quantities, remove items
- **Persistent Cart** - Cart data saved in localStorage
- **Shopping Cart Sidebar** - Beautiful slide-in cart interface
- **Checkout Button** - Ready for payment integration
- **Toast Notifications** - User feedback for actions

### 🎬 Hero Video Section
- **Rotary Official Video** - ambient-poa-09-2025-v4.mp4
- **Video Controls** - Play/Pause functionality
- **Responsive Design** - Works on all devices

### 📑 Website Sections
1. **Navigation Bar** - Fixed header with cart icon
2. **Hero Section** - Video background with call-to-action
3. **Rotary Logo Section** - Brand identity display
4. **About Section** - Organization values and mission
5. **Causes Section** - 6 areas of focus
6. **Shop Section** - E-commerce product catalog
7. **Portfolio Section** - All your web development projects
8. **Contact Section** - Complete contact information
9. **Footer** - Links and social media

### 🎨 Portfolio Projects Included
- DigiTech Transformation (Vercel + Netlify)
- KFC Pakistan
- Al-Zainab Mobile
- Toyota Indus
- Khaadi
- Max Green Skills
- Teknofest Pakistan
- OpenClaw AI E-commerce
- Bilal Textile
- Gul Mohar Group
- Maharaja Restaurant
- Facebook Reel Feature

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16.0.0 or higher
- npm (comes with Node.js)

### Installation

1. **Navigate to project folder**
   ```bash
   cd D:\Rotary_Dot_Org_Websites_0001
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 🌐 Deployment Guide

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Production deployment
vercel --prod
```

**Expected URL:** `https://www.rotary-dot-org-junaid-ul-haque-sheikh.vercel.app`

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy

# Production deployment
netlify deploy --prod
```

**Expected URL:** `https://www.rotary-dot-org-junaid-ul-haque-sheikh.netlify.app`

### Deploy to GitHub Pages

1. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Rotary Website - Junaid Ul Haque Sheikh"
   git remote add origin https://github.com/junaidsheikh0002/junaidulhaquesheikh0001.git
   git push -u origin main
   ```

2. Enable GitHub Pages in repository settings

---

## 📁 Project Structure

```
D:\Rotary_Dot_Org_Websites_0001\
├── index.html              # Main HTML file with all sections
├── style.css               # Stylesheet with modern design
├── script.js               # JavaScript with cart functionality
├── server.js               # Express server for production
├── package.json            # Dependencies and scripts
├── vercel.json             # Vercel configuration
├── netlify.toml            # Netlify configuration
├── DEPLOYMENT.md           # Detailed deployment guide
├── README.md               # This file
├── Images/                 # Image assets
│   ├── rotary-logo-color-2019-simplified.svg
│   ├── 2025-09-20240628_UG_011-grant.jpg
│   ├── 2025-09-20250428_JP_088-connect.jpg
│   └── home-carousel-polio-20190805_PK_086.jpg
└── Videos/                 # Video assets
    └── ambient-poa-09-2025-v4.mp4
```

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables
- **JavaScript (ES6+)** - Interactive functionality
- **Express.js** - Backend server
- **Node.js** - Runtime environment

---

## 🎯 Key Features Implementation

### Cart System
```javascript
// Add to cart
addToCart(productId, productName, productPrice, productImage)

// Remove from cart
removeFromCart(productId)

// Update quantity
updateQuantity(productId, change)
```

### Video Controls
```javascript
// Toggle video play/pause
toggleVideo(button)
```

### LocalStorage Persistence
- Cart data automatically saved
- Survives page refresh
- No backend required for basic functionality

---

## 📝 API Endpoints (Optional Backend)

```
GET  /api/health          - Health check
POST /api/newsletter/subscribe - Newsletter signup
POST /api/contact         - Contact form submission
POST /api/checkout        - Checkout processing
```

---

## 🔧 Customization

### Change Products
Edit `index.html` - Look for `.product-card` elements:
```html
<div class="product-card" 
     data-product-id="1" 
     data-product-name="Product Name" 
     data-product-price="29.99">
```

### Update Portfolio Projects
Edit `index.html` - Portfolio section:
```html
<div class="portfolio-card">
    <h3>Project Name</h3>
    <a href="your-url.com" target="_blank">Visit Project →</a>
</div>
```

### Modify Colors
Edit inline styles in `index.html` - CSS variables at top

---

## ✅ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

---

## 📄 License

MIT License - Created by Junaid Ul Haque Sheikh

---

## 🙏 Acknowledgments

Inspired by [Rotary International](https://www.rotary.org/)

---

## 📞 Support

For questions or support, contact via WhatsApp:
- **Primary:** +92 335 9033554
- **Secondary:** +92 334 3046525

Or connect on social media platforms listed above.

---

## 🌟 All Project Links

### Vercel Deployments
- https://digitech-transformation.vercel.app/
- https://toyota-indus-pk.vercel.app/
- https://khaadi-eight.vercel.app/
- https://teknofest-pakistan.vercel.app/
- https://openclaw-ai-ecommerce.vercel.app/
- https://gulmohargroup-junaid.vercel.app/
- https://maharaja-restaurant.vercel.app/

### Netlify Deployments
- https://digitechtransformation-junaid.netlify.app/
- https://kfcpakistan-junaid-sheikh.netlify.app/
- https://al-zainab-mobile-junaid.netlify.app/
- https://maxgreenskills0009.netlify.app/
- https://bilal-textile-sheikh.netlify.app/

### Social Media
- Facebook: https://www.facebook.com/profile.php?id=100064065330176
- YouTube: https://www.youtube.com/@JunaidUlHaqueSheikh-g3z
- TikTok: https://www.tiktok.com/@junaid.ul.haque.s65
- Facebook Group: https://www.facebook.com/groups/958910999994384
- Featured Reel: https://www.facebook.com/reel/1391624955578357

---

**Version:** 2.0.0  
**Last Updated:** February 24, 2026  
**Developer:** Junaid Ul Haque Sheikh  
**Status:** ✅ Live with Video & Portfolio
