/**
 * Rotary Dot Org Website - Express Server
 * For production deployment
 */

const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname)));

// API Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Rotary Website API is running' });
});

app.post('/api/newsletter/subscribe', (req, res) => {
    const { email } = req.body;
    
    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Valid email is required' });
    }
    
    // Here you would integrate with your email service
    console.log('Newsletter subscription:', email);
    
    res.json({ 
        success: true, 
        message: 'Thank you for subscribing!' 
    });
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    
    // Here you would integrate with your email/contact service
    console.log('Contact form submission:', { name, email, message });
    
    res.json({ 
        success: true, 
        message: 'Thank you for contacting us! We will get back to you soon.' 
    });
});

app.post('/api/checkout', (req, res) => {
    const { cart, customerInfo } = req.body;
    
    if (!cart || cart.length === 0) {
        return res.status(400).json({ error: 'Cart is empty' });
    }
    
    // Here you would integrate with payment gateway
    console.log('Checkout request:', { cart, customerInfo });
    
    res.json({ 
        success: true, 
        message: 'Order placed successfully!',
        orderId: 'ORD-' + Date.now()
    });
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🌍 Rotary Website Server running on port ${PORT}`);
    console.log(`📍 http://localhost:${PORT}`);
});

module.exports = app;
