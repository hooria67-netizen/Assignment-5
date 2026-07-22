
const makeupProducts = [
    { id: 1,
    title: "Velvet Matte Lipstick", category: "Makeup",
    price: "$18.00",
    rating: "★ 4.7",
    description: "Rich pigment payoff with a long-wear velvet smooth finish.", image: "Matte Lipstick - Red Velvet.png"
    },
    { id: 2,
    title: "Flawless Liquid Foundation", 
    category: "Makeup",
    price: "$32.50", 
    rating: "★ 4.6", 
    description: "Full coverage formula that lasts 24 hours with a matte finish.", image: "foundation.jpg" },
    { id: 3,
    title: "Waterproof Volume Mascara", 
    category: "Makeup", 
    price: "$14.99", 
    rating: "★ 4.8", 
    description: "Instantly adds intense volume and lift without clumping.",
    image: "maskara.jpg" },
    { id: 4, title: " Nude Eyeshadow Palette", category: "Makeup", price: "$28.00", rating: "★ 4.9", description: "12 highly pigmented shades ranging from soft matte to shimmer.", image: "eyeshadow.jpg" },
    { id: 5,
    title: "Glow Liquid Highlighter", category: "Makeup", price: "$19.50", rating: "★ 4.5", description: "Build-able metallic shimmer for an effortless illuminated finish.", 
    image: "LiquidHighlighter.jpg" },
    { id: 6,
    title: "Peach HD Powder Blush", category: "Makeup", 
    price: "$16.00", rating: "★ 4.4", 
    description: "Silky, lightweight formula that blends easily onto skin tones.", 
    image: "powder.jpg" },
    { id: 7, 
    title: "Precision Liquid Eyeliner", 
    category: "Makeup", 
    price: "$12.50",
    rating: "★ 4.7",
    description: "Ultra-fine tip pen for creating sharp wings that do not smudge.", 
    image: "liner.jpg" },
    { id: 8, 
    title: "setting powder", 
    category: "Makeup", 
    price: "$22.00", 
    rating: "★ 4.6", 
    description: "Locks down makeup instantly while absorbing excessive oils.", 
    image:"settingpowder.png" },
    { id: 9,
    title: "Hydrating Primer Gel", category: "Makeup",
    price: "$24.00", 
    rating: "★ 4.5", 
    description: "Grips cosmetics in place while creating a flawless base.", 
    image: "PrimerGel.jpg" },
    { id: 10,
    title: "Full Coverage Concealer", 
    category: "Makeup",
    price: "$15.50", 
    rating: "★ 4.6", 
    description: "Crease-proof satin formula that hides dark spots effortlessly.", image: "CConcealer.jpg" },
    { id: 11,
    title: "Plumping Clear Lip Gloss",
    category: "Makeup", 
    price: "$13.99", 
    rating: "★ 4.3",
    description: "High shine mirror glaze that plumps lips dynamically.", 
    image: "lip gloss.png" },
    { id: 12,
    title: "Eyebrow Pencil", 
    category: "Makeup", 
    price: "$11.00",
    rating: "★ 4.5", 
    description: "Dual-ended spoolie pencil designed to mimic real brow hairs.", image: "bpencil.jpg" },
    { id: 13,
    title: "Matte Finish Setting Spray", 
    category: "Makeup", 
    price: "$17.00", 
    rating: "★ 4.8", description: "Weightless continuous mist to shield make up look up to 16h.",
    image: "spray.jpg" },
    { id: 14,
    title: "Sun-Kissed Matte Bronzer", 
    category: "Makeup", 
    price: "$21.50", 
    rating: "★ 4.6",
    description: "Adds natural warmth and dimension to the contours of your face.", 
    image: "bronzer.jpg" },
    { id: 15, 
    title: "Glitter Metallic Eyeshadow", 
    category: "Makeup", 
    price: "$9.99", 
    rating: "★ 4.4", 
    description: "Liquid shimmer format that gives high-impact light reflections.",
    image: "Glitteeyeshadow.jpg" },
    { id: 16,
    title: "Tinted Lip & Cheek Stain", 
    category: "Makeup", 
    price: "$14.00",
    rating: "★ 4.7",
    description: "Fresh rosy watercolor tint that delivers natural looking blush.", 
    image: "tint.jpg" },
    { id: 17,
    title: "Correcting CC Cream SPF 30", 
    category: "Makeup",
    price: "$26.00",
    rating: "★ 4.5",
    description: "Color-correcting lightweight coverage cream with daily SPF shield.", image: "CC Cream.jpg" },
    { id: 18,
    title: "Contour & Sculpt Palette", 
    category: "Makeup", 
    price: "$25.00",
    rating: "★ 4.6", 
    description: "Four define shades ideal for carving jawlines and facial zones.", 
    image: "CConcealer.jpg" },
    { id: 19,
    title:"Nourishing Lip Oil Cream", 
    category: "Makeup",
    price: "$12.00",
    rating: "★ 4.8",
    description: "Infused with cherry blossom seed oil for glossy hydrated texture.", 
    image: "Lip Oil .jpg" },
    { id: 20,
    title: "Gel Pot Eyeliner Noir", 
    category: "Makeup", 
    price: "$15.00", 
    rating: "★ 4.4", description: "Deep dark creamy carbon formula that stays completely smudge free.", 
    image: "Gelliner.jpg" },
  
];

let cartCount = 0;
let wishlistCount = 0;

const gridContainer = document.getElementById("makeup-products-grid");
const cartBadge = document.getElementById("cart-count");
const wishlistBadge = document.getElementById("wishlist-count");

// Dynamic Loop Generation (forEach block)
function renderMakeupPage() {
    makeupProducts.forEach(product => {
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

renderMakeupPage();
