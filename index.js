
const products = [
    {id: 1,
    title: "Niacinamide Balance Serum", 
    category: "Skincare",
    price: "$17.99", 
    rating: "★ 4.7", 
    description: "Controls excess sebum oils and minimizes extended visible pores.", image: "serum.jpg" },
    {
        id: 2,
        title: "Matte Liquid Lipstick",
        category: "Makeup",
        price: "$18.50",
        rating: "★ 4.6",
        description: "Long-lasting, smudge-proof formula with a rich velvet matte finish that stays all day.",
        image: "Matte Lipstick - Red Velvet.png"
    },
    {
        id: 3,
        title: "Vitamin C Brightening serum",
        category: "Skincare",
        price: "$29.00",
        rating: "★ 4.7",
        description: "Brightens dull skin tone, fades dark spots, and provides 24-hour intense nourishment.",
        image: "vitamin c.jpg"
    },
    {
        id: 4,
        title: "Waterproof Volume Mascara",
        category: "Makeup",
        price: "$15.00",
        rating: "★ 4.5",
        description: "Delivers instant dramatic volume and length without any clumping or flaking.",
        image: "maskara.jpg"
    },
    {
        id: 5,
        title: "Glow Daily Exfoliating Toner",
        category: "Skincare",
        price: "$22.00",
        rating: "★ 4.9",
        description: "Gently exfoliates pores, removes dead skin cells, and reveals an instant natural glow.",
        image: "toner.jpg"
    },
    {
        id: 6,
        title: "Flawless Liquid Foundation",
        category: "Makeup",
        price: "$32.00",
        rating: "★ 4.4",
        description: "Build-able medium to full coverage foundation with a natural skin-like dewy finish.",
        image: "foundation.jpg"
    }
];

// App States (Variables to maintain counts)
let cartCount = 0;
let wishlistCount = 0;

// Container target jahan card dynamic add karne hain
const allProductsContainer = document.getElementById("all-products");
const cartBadge = document.getElementById("cart-count");
const wishlistBadge = document.getElementById("wishlist-count");

// Loop chala kar cards display karna
function displayHomeProducts() {
    products.forEach(product => {
        // Card component elements generate karna
        allProductsContainer.innerHTML += `
            <div class="product-card">
                <div class="image-container">
                    <button class="wishlist-btn" onclick="toggleWishlist(this)">🤍</button>
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                </div>
                <div class="product-info">
                    <span class="category">${product.category}</span>
                    <h3 class="product-title">${product.title}</h3>
                    <p class="description">${product.description}</p>
                    <div class="price-rating">
                        <span class="price">${product.price}</span>
                        <span class="rating">${product.rating}</span>
                    </div>
                    <button class="buy-btn" onclick="addToCart()">Add to Cart</button>
                </div>
            </div>
        `;
    });
}

// Function: Add to Cart Logic
function addToCart() {
    cartCount++;
    cartBadge.innerText = cartCount;
}

// Function: Wishlist Toggle Logic
function toggleWishlist(button) {
    if (button.classList.contains("active-wish")) {
        button.classList.remove("active-wish");
        button.innerText = "🤍";
        wishlistCount--;
    } else {
        button.classList.add("active-wish");
        button.innerText = "❤️";
        wishlistCount++;
    }
    wishlistBadge.innerText = wishlistCount;
}

// Execute on load
displayHomeProducts();
