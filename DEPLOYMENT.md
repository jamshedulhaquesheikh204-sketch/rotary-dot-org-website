# Rotary Dot Org Website - Deployment Guide

## Project: Rotary International Clone with E-commerce
**Developer:** Junaid Ul Haque Sheikh  
**Contact:** +92 335 9033554 / +92 334 3046525

---

## 🚀 Deployment Instructions

### Option 1: Vercel Deployment

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Production Deployment**:
   ```bash
   vercel --prod
   ```

5. **Custom Domain Setup**:
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings → Domains
   - Add: `www.rotary-dot-org-junaid-ul-haque-sheikh.vercel.app`

---

### Option 2: Netlify Deployment

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Initialize Site**:
   ```bash
   netlify init
   ```

4. **Deploy**:
   ```bash
   netlify deploy
   ```

5. **Production Deploy**:
   ```bash
   netlify deploy --prod
   ```

6. **Custom Domain Setup**:
   - Go to Netlify dashboard
   - Select your site
   - Go to Domain Settings
   - Add: `www.rotary-dot-org-junaid-ul-haque-sheikh.netlify.app`

---

### Option 3: GitHub Pages (Static)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Rotary Website"
   git branch -M main
   git remote add origin https://github.com/junaidsheikh0002/junaidulhaquesheikh0001.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Select `main` branch as source
   - Save

---

### Option 4: Local Server (Development)

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Start Production Server**:
   ```bash
   npm start
   ```

4. **Access Website**:
   - Open browser to `http://localhost:3000`

---

## 📋 Features Included

### E-commerce Functionality
- ✅ Product catalog with 6 items
- ✅ Add to Cart functionality
- ✅ Cart sidebar with quantity management
- ✅ Persistent cart (localStorage)
- ✅ Checkout button
- ✅ Cart notifications

### Contact Information
- ✅ WhatsApp numbers (6 contacts)
- ✅ Physical address (Karachi, Pakistan)
- ✅ Social media links:
  - Facebook Profile
  - YouTube Channel
  - TikTok
  - Facebook Group
  - Fiverr Portfolio

### Sections
- ✅ Hero with video background
- ✅ Rotary Logo section
- ✅ About section
- ✅ Causes/Focus Areas
- ✅ E-commerce Shop
- ✅ Impact Stories
- ✅ Get Involved
- ✅ Contact Section
- ✅ Footer

---

## 🔗 Deployment URLs

After deployment, your website will be accessible at:

- **Vercel**: `https://www.rotary-dot-org-junaid-ul-haque-sheikh.vercel.app`
- **Netlify**: `https://www.rotary-dot-org-junaid-ul-haque-sheikh.netlify.app`
- **GitHub Pages**: `https://junaidsheikh0002.github.io/junaidulhaquesheikh0001`

---

## 📱 Contact Information

**Junaid Ul Haque Sheikh**  
Web Developer (Intern / Trainee)

**WhatsApp:**
- +92 335 9033554
- +92 334 3046525
- +92 332 3605926
- +92 332 0213589
- +92 337 2135310
- +92 336 8068664

**Address:**  
Shaheed Makdhoom Bilawal Society  
Near Safoora Chowrangi  
Karachi, Pakistan

---

## 🛠️ Troubleshooting

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Check Node.js version: `node --version` (should be >= 16)

### Deployment Issues
- Clear cache and redeploy
- Check environment variables
- Verify configuration files (vercel.json, netlify.toml)

### Cart Not Working
- Ensure JavaScript is enabled in browser
- Check browser console for errors
- Clear localStorage and refresh

---

## 📄 License

MIT License - Created by Junaid Ul Haque Sheikh

---

**Last Updated:** February 24, 2026
