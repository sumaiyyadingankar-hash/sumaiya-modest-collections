// GET ID FROM URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Find product from ALL categories
const product = window.allProducts.find(p => p.id == productId);

if (product) {
  document.getElementById("productImage").src = product.image;
  document.getElementById("productName").innerText = product.name;
  document.getElementById("productPrice").innerText = "₹"+product.price;
  document.getElementById("productDesc").innerText = product.desc;
} else {
  document.querySelector(".product-details").innerHTML =
    "<h2 style='text-align:center; padding:40px;'>Product not found</h2>";
}

document.getElementById("addToCartBtn").addEventListener("click", () => {
  addToCart(product);
  // Ensure counters update immediately
  updateCartCount();
});

document.getElementById("addToWishlistBtn").addEventListener("click", () => {
  addToWishlist(product);
  // Ensure counters update immediately
  updateWishlistCount();
});