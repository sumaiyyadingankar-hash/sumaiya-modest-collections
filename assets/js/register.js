import { initBackButton, showToast } from "./auth-common.js";
initBackButton("../index.html");

import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const form = document.querySelector(".signup-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullName = form.querySelector("input[type='text']").value;
  const email = form.querySelector("input[type='email']").value;
  const password = form.querySelectorAll("input[type='password']")[0].value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(userCredential.user, {
      displayName: fullName
    });

    showToast("Account created successfully!", "success");

    setTimeout(() => {
      window.location.href = "./login.html";
    }, 1500);

  } catch (err) {
    showToast(err.message, "error");
  }
});
