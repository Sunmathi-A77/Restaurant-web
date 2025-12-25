function toggleForm() {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const formTitle = document.getElementById("form-title");

  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    formTitle.textContent = "Login";
  } else {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    formTitle.textContent = "Create Account";
  }
}

function login(event) {
  event.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  alert(`Logged in with: ${email}`);
  window.location.href = "menu.html"; // Redirect to menu page
  return false;
}

function signup(event) {
  event.preventDefault();
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const dob = document.getElementById("signup-dob").value;

  const age = getAge(new Date(dob));
  if (age < 13) {
    alert("You must be at least 13 years old to sign up.");
    return false;
  }

  alert(`Account created for ${name}, Age: ${age}`);
  window.location.href = "menu.html";
  return false;
}

function getAge(dob) {
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  return age;
}