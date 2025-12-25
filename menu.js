const items = [
  { name: "Cheese Pizza", price: 300, oldPrice: 450, img: "image/pizza.jpg", category: "veg" },
  { name: "Cute Burger", price: 200, oldPrice: 300, img: "image/cute-burger.jpg", category: "non-veg" },
  { name: "Double Stack", price: 250, oldPrice: 300, img: "image/double-burger.jpg", category: "non-veg" },
  { name: "Happy Sandwich", price: 100, oldPrice: 150, img: "image/smile-sandwich.jpg", category: "veg" },
  { name: "Fried Chicken", price: 100, oldPrice: 150, img: "image/fried-chicken.jpg", category: "non-veg" },
  { name: "Cola Pizza Combo", price: 350, oldPrice: 400, img: "image/cola-pizza.jpg", category: "non-veg" },
  { name: "Biryani", price: 350, oldPrice: 400, img: "image/briyani.jpg", category: "non-veg" },
  { name: "Fried rice", price: 150, oldPrice: 200, img: "image/fried rice.jpg", category: "veg" },
  { name: "Roll Wrap", price: 60, oldPrice: 100, img: "image/wrap.jpg", category: "non-veg" },
  { name: "World Famous Fries", price: 120, oldPrice: 150, img: "image/fries.jpg", category: "veg" },
  { name: "Ice creames", price: 100, oldPrice: 120, img: "image/icecream.jpg", category: "desserts" },
  { name: "Vegees", price: 100, oldPrice: 150, img: "image/vegessalad.jpg", category: "veg" },
  { name: "Full meals veg", price: 350, oldPrice: 400, img: "image/full meal veg.jpg", category: "veg" },
  { name: "chicken Momos", price: 100, oldPrice: 150, img: "image/momos.jpg", category: "non-veg" },
  { name: "Ghee Dosa", price: 80, oldPrice: 100, img: "image/dosa.jpg", category: "veg" },
  { name: "Veg Noodles", price: 90, oldPrice: 120, img: "image/noodles.jpg", category: "veg" },
  { name: "Cheese Pasta", price: 100, oldPrice: 130, img: "image/pasta.jpg", category: "veg" },
  { name: "Honey Cake", price: 90, oldPrice: 100, img: "image/cake.jpg", category: "desserts" },
  { name: "Parotta", price: 50, oldPrice: 90, img: "image/parotta.jpg", category: "veg" },
  { name: "Mango smoothie", price: 50, oldPrice: 90, img: "image/mango juice.jpg", category: "desserts" },
  { name: "Chocolate", price: 70, oldPrice: 100, img: "image/chocolate1.jpg", category: "desserts" },
  { name: "Chocolate Cake", price: 120, oldPrice: 150, img: "image/chocolate-cake.jpg", category: "desserts" },
  { name: "Gulab Jamun", price: 80, oldPrice: 100, img: "image/gulab-jamun.jpg", category: "desserts" },
  { name: "Rasgulla", price: 80, oldPrice: 100, img: "image/rasgulla.jpg", category: "desserts" }
];


let isBirthday = false;

function checkBirthday() {
  const input = document.getElementById('birthday').value;
  if (!input) return;

  const today = new Date();
  const birthDate = new Date(input);

  if (
    birthDate.getDate() === today.getDate() &&
    birthDate.getMonth() === today.getMonth()
  ) {
    isBirthday = true;
    document.getElementById('birthday-message').textContent =
      "🎉 Happy Birthday! You get 10% off and a free chocolate!";
    renderMenu(items);
  } else {
    isBirthday = false;
    document.getElementById('birthday-message').textContent =
      "It's not your birthday today!";
    renderMenu(items);
  }
}

function renderMenu(filteredItems) {
  const container = document.getElementById('menu-container');
  container.innerHTML = '';
  filteredItems.forEach(item => {
    let finalPrice = isBirthday ? Math.round(item.price * 0.9) : item.price;

    const div = document.createElement('div');
    div.className = 'menu-item';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p><span class="price">$${finalPrice}</span><span class="old-price">$${item.oldPrice}</span></p>
      <button onclick="addToCart('${item.name}', ${finalPrice})">Order Now</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push({ name, price });

  // Add complimentary chocolate if birthday and not already added
  if (isBirthday && !cart.find(item => item.name === "Complimentary Chocolate")) {
    cart.push({ name: "Complimentary Chocolate", price: 0 });
    alert("🎁 Complimentary Chocolate added to your cart!");
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

function applyFilters() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const category = document.getElementById('categoryFilter').value;

  const filtered = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search);
    const matchesCategory = category === 'all' || item.category === category;
    return matchesSearch && matchesCategory;
  });

  renderMenu(filtered);
}

// Initial render
renderMenu(items);

// Event listeners for filtering
document.getElementById('searchInput').addEventListener('input', applyFilters);
document.getElementById('categoryFilter').addEventListener('change', applyFilters);