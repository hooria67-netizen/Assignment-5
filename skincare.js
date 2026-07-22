const skincareProducts = [
    
    { id: 2, 
    title: "Vitamin C Brightening Cream", 
    category: "Skincare",
    price: "$29.00", 
    rating: "★ 4.7",
    description: "Brightens dull skin tone and removes dark spots effectively.", 
    image: "BrighteningC.jpg" },
    { id: 3, 
    title: "Glow Daily Exfoliating Toner", 
    category: "Skincare", 
    price: "$22.00", 
    rating: "★ 4.9", 
    description: "Gently exfoliates skin pores and removes dead surface cells.",
    image: "toner.jpg" },
    { id: 4, 
    title: "Gentle Tea Tree Cleanser", 
    category: "Skincare",
    price: "$16.50",
    rating: "★ 4.6", 
    description: "Purifying wash gel that combats breakouts and controls oil levels.", image: "Gentletea.jpg" },
    { id: 5,
    title: "Overnight Repair Face Mask", 
    category: "Skincare", 
    price: "$34.00",
    rating: "★ 4.8",
    description: "Deeply rejuvenates and restores natural barriers while you sleep.", 
    image: "nightmask.jpg" },
    { id: 6, 
    title: "Ultra Shield Sunscreen SPF 50", 
    category: "Skincare", 
    price: "$19.99",
    rating: "★ 4.5", 
    description: "Non-greasy broad-spectrum protection layer against UV radiation.", image: "sunscreen.jpg" },
    { id: 7,
    title: " Eye Cream", 
    category: "Skincare",
    price: "$18.00",
    rating: "★ 4.4", 
    description: "Rich creamy structure that minimizes wrinkles and fine lines.", image: "eye_cream.jpg" },
    { id: 8, 
    title: "Retinol Anti-Aging Serum", 
    category: "Skincare",
    price: "$31.50", 
    rating: "★ 4.7", 
    description: "Accelerates surface skin cells renewal for youthful texture skin.",
    image: "RetinolSerum.jpg" },
    { id: 9, 
    title: "Rosewater Refreshing Mist", 
    category: "Skincare", 
    price: "$12.00",
    rating: "★ 4.6", 
    description: "Instant facial hydration wake-up call spray formula.", 
    image: "tonar.jpg" },
    { id: 10, 
    title: "Snail Mucin Repair Gel", 
    category: "Skincare",
    price: "$23.00", 
    rating: "★ 4.9",
    description: "96% filtered snail extract to rebuild skin damage elements.", image: "snail_mucin.jpg" },
    { id: 11, 
    title: "Salicylic Acid Pore Solution", 
    category: "Skincare", 
    price: "$15.00",
    rating: "★ 4.5", 
    description: "Targeted oily serum base to clean up blackheads inside nose area.",
    image: "Salicylics.jpg" },
    { id: 12,
    title: "Niacinamide Balance Serum", 
    category: "Skincare",
    price: "$17.99", 
    rating: "★ 4.7", 
    description: "Controls excess sebum oils and minimizes extended visible pores.", image: "serum.jpg" },
    { id: 13, 
    title: "Soothing Aloe Vera Jelly",
    category: "Skincare",
    price: "$9.50",
    rating: "★ 4.8",
    description: "Pure fresh herbal relief gel perfect for skin sunburn calming.", image: "aloe.jpg" },
    { id: 14, 
    title: "Centella Calming Ampoule Serum", 
    category: "Skincare",
    price: "$26.00", 
    rating: "★ 4.6", 
    description: "Calms high irritation redness on super sensitive facial layers.", 
    image: "centella.jpg" },
    { id: 15, title: "Hydrating Coconut Face Oil", category: "Skincare", price: "$14.00", rating: "★ 4.3", description: "Organic pure cold-pressed dynamic moisture shield drop lotion.",
    image: "faceoil.jpg" },
    { id: 16, 
    title: "Mineral Clay Detox Mask", 
    category: "Skincare", 
    price: "$19.50",
    rating: "★ 4.7", 
    description: "Deeply vacuums grease dirt out of facial cells skin layer.", 
    image: "claymask.png" },
    { id: 17, 
    title: "Ceramide Moisture Barrier Base", 
    category: "Skincare",
    price: "$25.00", 
    rating: "★ 4.8", 
    description: "Locked formula setup designed to rebuild skin health defense.", image: "ceramide.jpg" },
    { id: 18,
    title: "Brightening Papaya Scrub Pen",
    category: "Skincare",
    price: "$11.99", 
    rating: "★ 4.5", 
    description: "Natural enzyme wash setup that reveals light skin tones fast.", image: "PScrub.jpg" },
    { id: 19, 
    title: "Bakuchiol Natural Retinol Cream", 
    category: "Skincare", 
    price: "$28.00", 
    rating: "★ 4.6", 
    description: "Plant-derived soft alternative formulation for wrinkle reduction.",
    image: "retinol.jpg" },
    
];

let cartCount = 0;
let wishlistCount = 0;

const gridContainer = document.getElementById("skincare-products-grid");
const cartBadge = document.getElementById("cart-count");
const wishlistBadge = document.getElementById("wishlist-count");

// Dynamic Loop Generation (forEach block for skincare collection)
function renderSkincarePage() {
    skincareProducts.forEach(product => {
        gridContainer.innerHTML += `
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

function addToCart() {
    cartCount++;
    cartBadge.innerText = cartCount;
}

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

renderSkincarePage();
