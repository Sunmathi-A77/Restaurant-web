function signup(event) {
    event.preventDefault();
  
    const email = document.getElementById("new-email").value;
    const password = document.getElementById("new-password").value;
  
    if (!email || !password) {
      alert("Please fill in all fields.");
      return false;
    }
  
    // Save user to localStorage
    localStorage.setItem("user", JSON.stringify({ email, password }));
  
    // Redirect to menu page
    window.location.href = "menu.html";
  
    return false;
  }