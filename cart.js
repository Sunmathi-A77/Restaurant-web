/*function renderCart() {
  const container = document.getElementById('cart-container');
  const totalDisplay = document.getElementById('total');
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    totalDisplay.textContent = "";
    return;
  }

  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price}</span>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    container.appendChild(div);
  });

  totalDisplay.textContent = `Total: $${total}`;
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function checkout() {
  alert("Thanks for your order!");
  localStorage.removeItem('cart');
  window.location.href = 'menu.html';
}

renderCart();*/

// Function to render the cart contents
function renderCart() {
  const container = document.getElementById('cart-container');
  const totalDisplay = document.getElementById('total');
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');

  // If cart is empty, show a message
  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    totalDisplay.textContent = "";
    return;
  }

  // Clear the current cart container
  container.innerHTML = "";
  let total = 0;  // Initialize total price to 0

  // Loop through each cart item and display it
  cart.forEach((item, index) => {
    total += item.price;

    // Create a div element to display the item
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price}</span>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    container.appendChild(div);  // Add the item to the cart container
  });

  // Display the total price
  totalDisplay.textContent = `Total: $${total}`;
}

// Function to remove an item from the cart
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.splice(index, 1);  // Remove the item at the specified index
  localStorage.setItem('cart', JSON.stringify(cart));  // Save updated cart to localStorage
  renderCart();  // Re-render the cart after removal
}

// Function to submit billing information
function submitBilling() {
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // If all fields are filled out
  if (name && address && email && phone) {
    const billingInfo = { name, address, email, phone };
    localStorage.setItem('billingInfo', JSON.stringify(billingInfo));
    alert("Billing information saved!");
  } else {
    alert("Please fill out all the fields.");
  }
}

// Function to handle the checkout process
function checkout() {
  const billingInfo = JSON.parse(localStorage.getItem('billingInfo'));

  // Check if billing info is provided
  if (billingInfo) {
    alert(`Thanks for your order, ${billingInfo.name}!`);
  } else {
    alert("Please provide your billing information first.");
    return;
  }

  // Clear the cart and billing information after checkout
  localStorage.removeItem('cart');
  localStorage.removeItem('billingInfo');
  window.location.href = 'menu.html';  // Redirect to the menu page after checkout
}

// Initialize the cart page by rendering the cart content
renderCart();
