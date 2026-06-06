import { showToast } from "./auth-common.js";

function sendMail() {
  var params = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    message: document.getElementById("message").value.trim()
  };

  // Basic validation
  if (!params.name || !params.email || !params.message) {
    showToast("Please fill all fields", "error");
    return;
  }

  const serviceID = "service_9swpfhd";
  const templateID = "template_myohepb";

  emailjs.send(serviceID, templateID, params)
    .then(() => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";

      // ✅ SUCCESS TOAST
      showToast("Message sent successfully!");
    })
    .catch(() => {
      // ❌ ERROR TOAST
      showToast("Failed to send message. Try again.", "error");
    });
}

// make function global for button onclick
window.sendMail = sendMail;