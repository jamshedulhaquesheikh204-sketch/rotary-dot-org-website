/**
 * Rotary Dot Org - Humanitarian Website
 * Interactive JavaScript with E-commerce Functionality
 * Enhanced with AI Assistant, Digital FTEs, SpecifyPlus & SpecitPlus
 */

document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // Shopping Cart State
    // ============================================
    let cart = [];
    let wishlist = [];
    const CART_STORAGE_KEY = 'rotary_cart';
    const WISHLIST_STORAGE_KEY = 'rotary_wishlist';

    // Load cart from localStorage
    function loadCart() {
        const savedCart = localStorage.getItem(CART_STORAGE_KEY);
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCartUI();
        }
    }

    // Save cart to localStorage
    function saveCart() {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }

    // Add item to cart
    function addToCart(productId, productName, productPrice, productImage = '👕') {
        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: productId,
                name: productName,
                price: parseFloat(productPrice),
                image: productImage,
                quantity: 1
            });
        }

        saveCart();
        updateCartUI();
        showNotification('✅ Added to cart!', 'success');

        // Play add to cart sound
        playAddToCartSound();

        // Open cart sidebar
        openCart();
    }

    // Play add to cart sound
    function playAddToCartSound() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }

    // Remove item from cart
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        updateCartUI();
        showNotification('Item removed from cart', 'info');
    }

    // Update item quantity
    function updateQuantity(productId, change) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                removeFromCart(productId);
            } else {
                saveCart();
                updateCartUI();
            }
        }
    }

    // Get cart total
    function getCartTotal() {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Update cart UI
    function updateCartUI() {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartCount = document.getElementById('cart-count');
        const cartTotalAmount = document.getElementById('cart-total-amount');
        const cartSummaryBar = document.getElementById('cart-summary-bar');
        const cartSummaryCount = document.getElementById('cart-summary-count');
        const cartSummaryTotal = document.getElementById('cart-summary-total');

        // Update cart count
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;

        // Update cart total
        const total = getCartTotal();
        cartTotalAmount.textContent = '$' + total.toFixed(2);

        // Update cart summary bar
        if (cartSummaryBar) {
            if (totalItems > 0) {
                cartSummaryBar.style.display = 'block';
                if (cartSummaryCount) cartSummaryCount.textContent = totalItems;
                if (cartSummaryTotal) cartSummaryTotal.textContent = '$' + total.toFixed(2);
            } else {
                cartSummaryBar.style.display = 'none';
            }
        }

        // Update cart items display
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="cart-empty" style="text-align:center; padding:3rem 1rem;">
                    <div class="cart-empty-icon" style="font-size:4rem; margin-bottom:1rem;">🛒</div>
                    <p style="font-size:1.2rem; color:#0a2647; font-weight:600;">Your cart is empty</p>
                    <p style="margin-top: 10px; font-size: 0.9rem; color:#64748b;">Add some items from our shop!</p>
                </div>
            `;
        } else {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item" style="display:flex; gap:1rem; padding:1rem; background:#f8fafc; border-radius:12px; margin-bottom:1rem; align-items:center;">
                    <div class="cart-item-image" style="width:60px; height:60px; background:#fff; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:1.5rem; box-shadow:0 2px 8px rgba(0,0,0,0.1);">${item.image || '🛍️'}</div>
                    <div class="cart-item-info" style="flex:1;">
                        <div class="cart-item-title" style="font-weight:600; color:#0a2647; margin-bottom:0.25rem;">${item.name}</div>
                        <div class="cart-item-price" style="color:#005587; font-weight:700;">$${item.price.toFixed(2)}</div>
                        <div class="cart-item-quantity" style="display:flex; align-items:center; gap:0.5rem; margin-top:0.5rem;">
                            <button onclick="updateQuantity(${item.id}, -1)" style="width:28px; height:28px; border:1px solid #e2e8f0; background:#fff; border-radius:6px; cursor:pointer; font-size:1rem;">−</button>
                            <span style="min-width:24px; text-align:center; font-weight:600;">${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, 1)" style="width:28px; height:28px; border:1px solid #e2e8f0; background:#fff; border-radius:6px; cursor:pointer; font-size:1rem;">+</button>
                        </div>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})" style="width:32px; height:32px; border:none; background:#fee2e2; color:#dc2626; border-radius:8px; cursor:pointer; font-size:1.2rem;">&times;</button>
                </div>
            `).join('');

            // Add subtotal section
            cartItemsContainer.innerHTML += `
                <div style="border-top:2px solid #e2e8f0; padding-top:1rem; margin-top:1rem;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
                        <span style="color:#64748b;">Subtotal (${totalItems} items)</span>
                        <span style="font-weight:600;">$${total.toFixed(2)}</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
                        <span style="color:#64748b;">Shipping</span>
                        <span style="color:#1dbf73; font-weight:600;">FREE</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; font-size:1.1rem; font-weight:700; color:#0a2647; padding-top:0.5rem; border-top:1px solid #e2e8f0;">
                        <span>Total</span>
                        <span>$${total.toFixed(2)}</span>
                    </div>
                </div>
            `;
        }
    }

    // Show notification
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#28a745' : '#17a2b8'};
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            z-index: 3000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Open cart
    function openCart() {
        document.getElementById('cart-sidebar').classList.add('active');
        document.getElementById('cart-overlay').classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close cart
    function closeCart() {
        document.getElementById('cart-sidebar').classList.remove('active');
        document.getElementById('cart-overlay').classList.remove('active');
        document.body.style.overflow = '';
    }

    // Make functions globally available
    window.addToCart = addToCart;
    window.removeFromCart = removeFromCart;
    window.updateQuantity = updateQuantity;
    window.openCart = openCart;
    window.closeCart = closeCart;

    // ============================================
    // Navbar Scroll Effect
    // ============================================
    const navbar = document.getElementById('navbar');

    function handleScroll() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    // ============================================
    // Mobile Navigation Toggle
    // ============================================
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Animate hamburger
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // ============================================
    // Cart Sidebar Controls
    // ============================================
    const cartBtn = document.getElementById('cart-btn');
    const cartClose = document.getElementById('cart-close');
    const cartOverlay = document.getElementById('cart-overlay');
    const checkoutBtn = document.getElementById('checkout-btn');

    if (cartBtn) {
        cartBtn.addEventListener('click', openCart);
    }

    if (cartClose) {
        cartClose.addEventListener('click', closeCart);
    }

    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCart);
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                showNotification('Your cart is empty!', 'info');
            } else {
                const total = getCartTotal().toFixed(2);
                showNotification(`Proceeding to checkout - Total: $${total}`, 'success');
                // Here you would redirect to checkout page
                // window.location.href = '/checkout';
            }
        });
    }

    // ============================================
    // Add to Cart Buttons
    // ============================================
    document.querySelectorAll('.btn-add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productId = productCard.getAttribute('data-product-id');
            const productName = productCard.getAttribute('data-product-name');
            const productPrice = productCard.getAttribute('data-product-price');
            const productPlaceholder = productCard.querySelector('.product-placeholder');
            const productImage = productPlaceholder ? productPlaceholder.textContent : '👕';
            
            addToCart(productId, productName, productPrice, productImage);
        });
    });

    // ============================================
    // Smooth Scroll for Anchor Links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Scroll Reveal Animation
    // ============================================
    const revealElements = document.querySelectorAll(
        '.cause-card, .story-card, .value-card, .involved-card, .product-card, .section-title, .section-subtitle'
    );

    function revealOnScroll() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('active', 'reveal');
            }
        });
    }

    // Add reveal class to all elements initially
    revealElements.forEach(el => el.classList.add('reveal'));

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check initial state

    // ============================================
    // Counter Animation
    // ============================================
    const counters = document.querySelectorAll('[data-count]');
    let countersAnimated = false;

    function animateCounter(counter) {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = formatNumber(Math.floor(current));
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = formatNumber(target);
            }
        };

        updateCounter();
    }

    function formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M+';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(0) + 'K+';
        }
        return num.toString();
    }

    function checkCounters() {
        if (countersAnimated) return;

        const statsSection = document.querySelector('.hero-stats');
        if (statsSection) {
            const rect = statsSection.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                countersAnimated = true;
                counters.forEach(counter => animateCounter(counter));
            }
        }
    }

    window.addEventListener('scroll', checkCounters);
    checkCounters(); // Check initial state

    // ============================================
    // Newsletter Form Handling
    // ============================================
    const newsletterForm = document.getElementById('newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            const button = this.querySelector('button[type="submit"]');
            const originalText = button.textContent;

            // Simulate form submission
            button.textContent = 'Joining...';
            button.disabled = true;

            setTimeout(() => {
                button.textContent = '✓ Welcome!';
                button.style.background = 'linear-gradient(135deg, #28a745, #1e7e34)';
                emailInput.value = '';

                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                    button.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // ============================================
    // Parallax Effect for Hero
    // ============================================
    const hero = document.querySelector('.hero');

    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroContent = hero.querySelector('.hero-content');

            if (scrolled < hero.offsetHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.opacity = 1 - (scrolled / hero.offsetHeight);
            }
        });
    }

    // ============================================
    // Intersection Observer for Advanced Animations
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.cause-card, .story-card, .involved-card, .product-card').forEach(el => {
        observer.observe(el);
    });

    // ============================================
    // Active Navigation Link Highlighting
    // ============================================
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavLink() {
        const scrollPos = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // ============================================
    // Performance: Reduce animations for users who prefer reduced motion
    // ============================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) {
        document.querySelectorAll('*').forEach(el => {
            el.style.animationDuration = '0.01ms';
            el.style.transitionDuration = '0.01ms';
        });
    }

    // ============================================
    // Keyboard Navigation Support
    // ============================================
    document.addEventListener('keydown', function(e) {
        // Close cart on Escape
        if (e.key === 'Escape') {
            closeCart();
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // ============================================
    // Initialize
    // ============================================
    loadCart();
    console.log('🌍 Rotary Dot Org Website Loaded - Creating Hope in the World');
    console.log('🛒 E-commerce functionality enabled');

});

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Lazy Loading Images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src;
        }
    });
} else {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Add loading attribute to images
document.querySelectorAll('img').forEach(img => {
    if (!img.classList.contains('no-lazy')) {
        img.setAttribute('loading', 'lazy');
    }
});
