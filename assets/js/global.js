/* ---------------- GLOBAL CART & WISHLIST SYSTEM ---------------- */

// Get existing data or create empty arrays
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// Save to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function saveWishlist() {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function syncFromStorage() {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
  wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
}  


/* ---------------- ADD TO CART ---------------- */
function addToCart(product) {
  const exists = cart.find(item => item.id.toString() === product.id.toString());

  if (!exists) {
    cart.push({ ...product, qty: 1 });
    saveCart();
    showToast("Added to Cart");
  } else {
    showToast("Already in Cart");
  }

  updateCartCount(); // update counter immediately
  if (typeof renderCart === "function") renderCart();
}

/* ---------------- ADD TO WISHLIST ---------------- */
function addToWishlist(product) {
  const exists = wishlist.find(item => item.id.toString() === product.id.toString());

  if (!exists) {
    wishlist.push(product);
    saveWishlist();
    showToast("Added to Wishlist");
  } else {
    showToast("Already in Wishlist");
  }

  updateWishlistCount();
  if (typeof renderWishlist === "function") renderWishlist();
}

/* ---------------- REMOVE FROM CART ---------------- */
function removeFromCart(id) {
  cart = cart.filter(item => item.id.toString() !== id.toString());
  saveCart();
  updateCartCount();
  showToast("Removed from Cart");

  if (typeof renderCart === "function") renderCart();
}

/* ---------------- REMOVE FROM WISHLIST ---------------- */
function removeFromWishlist(id) {
  wishlist = wishlist.filter(item => item.id.toString() !== id.toString());
  saveWishlist();
  updateWishlistCount();

  if (typeof renderWishlist === "function") renderWishlist();
  showToast("Removed from Wishlist");
}
function refreshCounters() {
  syncFromStorage(); // 🔥 THIS WAS MISSING
  updateCartCount();
  updateWishlistCount();
}

/* ---------------- INCREASE / DECREASE QTY ---------------- */
function increaseQty(id) {
  const prod = cart.find(item => item.id.toString() === id.toString());
  if (prod) {
    prod.qty = (prod.qty || 1) + 1;
    saveCart();
    if (typeof renderCart === "function") renderCart();
  }
}

function decreaseQty(id) {
  const prod = cart.find(item => item.id.toString() === id.toString());
  if (prod && prod.qty > 1) {
    prod.qty -= 1;
    saveCart();
    if (typeof renderCart === "function") renderCart();
  }
}

function showToast(message, type = "success") {
  const box = document.getElementById("toastBox");
  const toast = document.createElement("div");

  toast.className = `toast ${type}`;
  toast.innerText = message;

  box.appendChild(toast);

  setTimeout(() => toast.remove(), 2000);
}

/* ---------------- UPDATE COUNTERS ---------------- */
function updateCartCount() {
  const cartEl = document.getElementById("cartCount");
  if (cartEl) {
    cartEl.innerText = cart.length;
    cartEl.style.display = cart.length > 0 ? "inline-block" : "none";
  }
}

function updateWishlistCount() {
  const wishEl = document.querySelector(".wishlist-icon-count");
  if (wishEl) {
    wishEl.innerText = wishlist.length;
    wishEl.style.display = wishlist.length > 0 ? "inline-block" : "none";
  }
}

/* ---------------- INITIALIZE ON PAGE LOAD ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  refreshCounters();
});

/* ---------------- FIX MOBILE BACK BUTTON CACHE ---------------- */
window.addEventListener("pageshow", () => {
  // Always refresh counters and render lists, even on mobile back button
  refreshCounters();
  if (typeof renderCart === "function") renderCart();
  if (typeof renderWishlist === "function") renderWishlist();
});

/* ---------------- EXPORT FUNCTIONS ---------------- */
window.addToCart = addToCart;
window.addToWishlist = addToWishlist;
window.removeFromCart = removeFromCart;
window.removeFromWishlist = removeFromWishlist;
window.increaseQty = increaseQty;
window.decreaseQty = decreaseQty;

// Listen to visibility change (works on mobile back/forward navigation)
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    refreshCounters();
    if (typeof renderCart === "function") renderCart();
    if (typeof renderWishlist === "function") renderWishlist();
  }
});