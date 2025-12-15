import { auth } from "./firebase.js";

/* ---------------------- TOAST ---------------------- */
function showToast(message, type = "success") {
  const box = document.getElementById("toastBox");
  const t = document.createElement("div");
  t.className = `toast ${type}`;
  t.innerHTML = `
    <span><i class="fa-solid ${type === "success" ? "fa-circle-check" : "fa-circle-xmark"}"></i> ${message}</span>
    <span class="close">&times;</span>
  `;
  box.appendChild(t);
  t.querySelector(".close").addEventListener("click", () => t.remove());
  setTimeout(() => t.remove(), 4000);
}

/* ---------------------- SAFE PATH HELPER ---------------------- */
function goTo(pathInsidePagesFolder) {
  // If current file is inside /pages/
  if (window.location.pathname.includes("/pages/")) {
    window.location.href = pathInsidePagesFolder; 
  } 
  // If current file is in root (index.html)
  else {
    window.location.href = "pages/" + pathInsidePagesFolder;
  }
}

/* ---------------------- MAIN ---------------------- */
document.addEventListener("DOMContentLoaded", () => {

  const profileIconEl = document.querySelector(".profile-icon");
  const profilePopup = document.getElementById("profilePopup");

  /* ---------- PROFILE POPUP ---------- */
  profileIconEl.addEventListener("click", (e) => {
    e.stopPropagation();
    profilePopup.style.display =
      profilePopup.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", () => {
    profilePopup.style.display = "none";
  });

  /* ---------- WISHLIST (SAFE) ---------- */
  const wishlistIcon = document.querySelector(".wishlist-icon");
  if (wishlistIcon) {
    wishlistIcon.addEventListener("click", () => {
      goTo("wishlist.html");
    });
  }

  /* ---------- CART (SAFE) ---------- */
  const cartIcon = document.querySelector(".cart-icon");
  if (cartIcon) {
    cartIcon.addEventListener("click", () => {
      goTo("cart.html");
    });
  }

  /* ---------- AUTH STATE ---------- */
  auth.onAuthStateChanged((user) => {
    if (user) {
      profilePopup.innerHTML = `
        <h3>👋 Hello, ${user.displayName || user.email}</h3>
        <div class="popup-buttons">
          <button id="myProfileBtn" class="popup-btn">My Profile</button>
          <button id="logoutBtn" class="popup-btn">Logout</button>
        </div>
      `;

      document.getElementById("myProfileBtn").addEventListener("click", () => {
        goTo("profile.html");
      });

      document.getElementById("logoutBtn").addEventListener("click", () => {
        document.getElementById("logoutModal").style.display = "flex";
      });

    } else {
      profilePopup.innerHTML = `
        <h3>Please Login Or Register</h3>
        <div class="popup-buttons">
          <a href="${window.location.pathname.includes('/pages/') ? 'login.html' : 'pages/login.html'}"><button class="popup-btn">Login</button></a>
          <a href="${window.location.pathname.includes('/pages/') ? 'register.html' : 'pages/register.html'}"><button class="popup-btn">Register</button></a>
        </div>
      `;
    }
  });

  /* ---------- LOGOUT MODAL ---------- */
  document.getElementById("cancelLogout").addEventListener("click", () => {
    document.getElementById("logoutModal").style.display = "none";
  });

  document.getElementById("confirmLogout").addEventListener("click", () => {
    auth
      .signOut()
      .then(() => {
        document.getElementById("logoutModal").style.display = "none";
        showToast("Logged out successfully!", "success");
      })
      .catch((err) => showToast(err.message, "error"));
  });

  /* ---------- MOBILE MENU ---------- */
  const menuOpenButton = document.getElementById("menu-open-button");
  const menuCloseButton = document.getElementById("menu-close-button");

  menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
  });

  menuCloseButton.addEventListener("click", () => {
    menuOpenButton.click();
  });
});

