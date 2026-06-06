// ============================
// LOAD WISHLIST
// ============================

const emptyState = document.getElementById("emptyState");
const wishlistItems = document.getElementById("wishlistItems");

function renderWishlist() {
    // If empty
    if (wishlist.length === 0) {
        emptyState.style.display = "flex";
        wishlistItems.style.display = "none";
        return;
    }

    emptyState.style.display = "none";
    wishlistItems.style.display = "grid";
    wishlistItems.innerHTML = "";

    wishlist.forEach(item => {
        // Convert price to number and format if needed
        const price = parseFloat(item.price.toString().replace(/[^0-9.]/g, '')) || 0;

        wishlistItems.innerHTML += `
        <div class="wishlist-card">
            <img src="${item.image}" alt="${item.name}">
            <div class="wishlist-details">
                <h4>${item.name}</h4>
                <p>₹${price}</p>
            </div>
            <div class="wishlist-actions">
                <button class="remove-btn" onclick="removeFromWishlist('${item.id}')">
                    Remove
                </button>
            </div>
        </div>
        `;
    });
}

// Render on page load
document.addEventListener("DOMContentLoaded", renderWishlist);