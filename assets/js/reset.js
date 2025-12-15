import { auth } from "./firebase.js";
import { initBackButton, showToast } from "./auth-common.js";
import { confirmPasswordReset } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

initBackButton("./login.html");

const urlParams = new URLSearchParams(window.location.search);
const oobCode = urlParams.get("oobCode");

const form = document.querySelector(".reset-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const pass1 = document.querySelector(".password1").value;
  const pass2 = document.querySelector(".password2").value;

  if (pass1 !== pass2) {
    showToast("Passwords do not match!", "error");
    return;
  }

  if (!oobCode) {
    showToast("Invalid or expired reset link!", "error");
    return;
  }

  try {
    await confirmPasswordReset(auth, oobCode, pass1);
    showToast("Password updated successfully!", "success");

    setTimeout(() => {
      window.location.href = "./login.html";
    }, 4000);

  } catch (err) {
    showToast(err.message, "error");
  }
});
