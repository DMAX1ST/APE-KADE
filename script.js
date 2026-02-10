
// Product Data
const phoneProducts = [
    {
        id: 1,
        name: "IPhone 15 Pro Max Case",
        price: "Rs. 2,500",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: "Phone"
    },
    {
        id: 2,
        name: "Samsung S24 Ultra Cover",
        price: "Rs. 2,200",
        image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: "Phone"
    },
    {
        id: 3,
        name: "Fast Charger 20W",
        price: "Rs. 3,500",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: "Phone"
    },
    {
        id: 4,
        name: "Wireless Earbuds",
        price: "Rs. 5,500",
        image: "https://images.unsplash.com/photo-1572569028738-411a56106518?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: "Phone"
    }
];

const mugProducts = [
    {
        id: 5,
        name: "Magic Changing Mug",
        price: "Rs. 1,500",
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: "Mug"
    },
    {
        id: 6,
        name: "Custom Name Mug",
        price: "Rs. 1,200",
        image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: "Mug"
    },
    {
        id: 7,
        name: "Couple Mug Set",
        price: "Rs. 2,800",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: "Mug"
    },
    {
        id: 8,
        name: "Travel Coffee Mug",
        price: "Rs. 1,800",
        image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        category: "Mug"
    }
];

const whatsappNumber = "94728706721";

// Function to Render Products
function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">${product.price}</p>
            <a href="https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi, I am interested in buying ${product.name} priced at ${product.price}`)}" 
               target="_blank" 
               class="whatsapp-btn">
                <i class="fab fa-whatsapp"></i> Buy on WhatsApp
            </a>
        </div>
    `).join('');
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(phoneProducts, 'phone-products');
    renderProducts(mugProducts, 'mug-products');

    // Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile Menu Toggle logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Toggle Nav
            navLinks.classList.toggle('nav-active');

            // Animate Links
            navLinks.querySelectorAll('li').forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            hamburger.classList.toggle('toggle');
            const icon = hamburger.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }
});
