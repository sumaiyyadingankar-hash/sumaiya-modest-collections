// 🔥 AUTH-COMMON.JS
// Used for login, register, forgot, reset pages

// Back button
export function initBackButton(path = "../index.html") {
  const backBtn = document.querySelector(".back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = path;
    });
  }
}

// Toast
export function showToast(message, type = "success") {
  const box = document.getElementById("toastBox");
  if (!box) return;

  const t = document.createElement("div");
  t.className = `toast ${type}`;
  t.innerHTML = `
    <span><i class="fa-solid ${type === "success" ? "fa-circle-check" : "fa-circle-xmark"}"></i> ${message}</span>
    <span class="close">&times;</span>
  `;

  box.appendChild(t);

  t.querySelector(".close").addEventListener("click", () => t.remove());

  // Auto remove for non-success messages
  if (type === "error") {
    setTimeout(() => t.remove(), 4000);
  }
}

