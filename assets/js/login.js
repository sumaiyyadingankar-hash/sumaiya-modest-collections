import { auth } from "./firebase.js";
import { initBackButton, showToast } from "./auth-common.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

initBackButton("../index.html");

const form = document.querySelector(".login-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = form.querySelector("input[type='email']").value;
  const password = form.querySelector("input[type='password']").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    showToast("Login successful!", "success");

    setTimeout(() => {
      window.location.href = "../index.html";
    }, 1500);

  } catch (err) {
    showToast(err.message, "error");
  }
});
