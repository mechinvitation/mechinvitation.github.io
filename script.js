document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    // const code = document.getElementById("code").value.trim();
    const validCode = "PARTY2025"; // example hardcoded invite code
    if (name === validCode) {
      localStorage.setItem("guestName", name);
      console.log("Location ", window.location.href);
      window.location.href = "partypage.html";
    } else {
      document.getElementById("error").textContent = "Invalid invite code!";
    }
  });
  