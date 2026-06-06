import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const userName = document.getElementById("userName");
const profileImage = document.getElementById("profileImage");
const userInfo = document.getElementById("userInfo");

onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "login.html";
        return;
    }

    // Set Name
    if (user.displayName) {
        userName.textContent = user.displayName;
    } else {
        const emailName = user.email.split("@")[0];
        userName.textContent = emailName.charAt(0).toUpperCase() + emailName.slice(1);
    }

    // Set Profile Image if exists
    if (user.photoURL) {
        profileImage.src = user.photoURL;
    }

    // Populate User Info with image icons
    userInfo.innerHTML = `
        <div class="info-item">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="email icon">
            <span>${user.email}</span>
        </div>
        <div class="info-item">
            <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="id icon">
            <span>${user.uid}</span>
        </div>
        <div class="info-item">
            <img src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png" alt="calendar icon">
            <span>Joined: ${new Date(user.metadata.creationTime).toLocaleDateString()}</span>
        </div>
        <div class="info-item">
            <img src="https://cdn-icons-png.flaticon.com/512/2089/2089613.png" alt="clock icon">
            <span>Last Active: ${new Date(user.metadata.lastSignInTime).toLocaleDateString()}</span>
        </div>
    `;
});
