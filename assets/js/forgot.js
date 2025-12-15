import { auth } from "./firebase.js";

import { initBackButton, showToast } from "./auth-common.js";
initBackButton("./login.html");


import { sendPasswordResetEmail }
  from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";


// Forgot password form
const form = document.querySelector(".forgot-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = form.querySelector("input[type='email']").value;

  try {
    // await sendPasswordResetEmail(auth, email);

    await sendPasswordResetEmail(auth, email, {
      url: "https://sumaiyyadingankar-hash.github.io/pages/reset-password.html",
      handleCodeInApp: true
    });

    showToast("Reset link sent to your email!", "success");
  } catch (err) {
    showToast(err.message, "error");
  }
});
