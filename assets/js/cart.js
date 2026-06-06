// LOAD CART

const emptyCart = document.getElementById("emptyCart");
const cartItems = document.getElementById("cartItems");
const cartSummary = document.querySelector(".cart-summary");


// Render cart items
function renderCart() {
    if (cart.length === 0) {
        emptyCart.style.display = "flex";
        cartItems.style.display = "none";
        // HIDE SUMMARY WHEN NO ITEMS
        cartSummary.style.display = "none";
        return;
    }

    // SHOW SUMMARY WHEN ITEMS EXIST
    cartSummary.style.display = "block";
    emptyCart.style.display = "none";
    cartItems.style.display = "grid";
    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        const price = parseFloat(item.price.toString().replace(/[^0-9.]/g, '')) || 0;
        const qty = item.qty || 1;
        const itemTotal = price * qty;

        total += itemTotal;

        cartItems.innerHTML += `
        <div class="cart-card">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-details">
                <h4>${item.name}</h4>
                <p>₹${price}</p>
                <p class="item-total">Subtotal: ₹${itemTotal}</p>
            </div>

            <div class="cart-actions">
                <div class="qty-box">
                    <button class="qty-btn" onclick="decreaseQty('${item.id}')">-</button>
                    <span class="qty-number">${qty}</span>
                    <button class="qty-btn" onclick="increaseQty('${item.id}')">+</button>
                </div>

                <button class="remove-btn" onclick="removeFromCart('${item.id}')">Remove</button>
            </div>
        </div>
        `;
    });

    // UPDATE SUMMARY VALUES
    document.getElementById("summaryItems").innerText = cart.length;
    document.getElementById("summarySubtotal").innerText = total;
    document.getElementById("summaryDelivery").innerText = total > 0 ? "Free" : "—";
    document.getElementById("summaryGrandTotal").innerText = total;
    updateCartCount();
}


// Remove item
function removeFromCart(id) {
    cart = cart.filter(item => item.id.toString() !== id.toString());
    saveCart();
    renderCart();
    showToast("Removed from Cart");
}

// Increase Qty
function increaseQty(id) {
    const prod = cart.find(item => item.id.toString() === id.toString());
    if (prod) {
        prod.qty = (prod.qty || 1) + 1;
        saveCart();
        renderCart();
    }
}

// Decrease Qty
function decreaseQty(id) {
    const prod = cart.find(item => item.id.toString() === id.toString());
    if (prod && prod.qty > 1) {
        prod.qty -= 1;
        saveCart();
        renderCart();
    }
}

// Run on page load
document.addEventListener("DOMContentLoaded", renderCart);

const checkoutBtn = document.querySelector(".checkout-btn");

if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
        // Adjust path based on your folder structure
        window.location.href = "checkout.html"; // same folder
    });
}