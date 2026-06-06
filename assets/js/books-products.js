// ============== BOOKS PRODUCTS DATA ==============
const booksProductsData = [
  {
    id: 401,
    name: "Healing with the Medicine of the Prophet",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203348/2_qj58gy.jpg"
  },
  {
    id: 402,
    name: "The Disease and the Cure",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203348/3_qcdumw.jpg"
  },
  {
    id: 403,
    name: "The Sealed Nectar",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203345/1_iuxp9x.jpg"
  },
  {
    id: 404,
    name: "Atomic Habits",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765211845/Atomic_Habits_tmmpj7.jpg"
  }
];

// Container
const booksContainer = document.getElementById("booksProducts");

// ============== RENDER BOOKS PRODUCTS ==============
function displayBooksProducts() {
  if (!booksContainer) return;

  booksContainer.innerHTML = booksProductsData
    .map(product => `
      <div class="product-card" onclick="openProductPage(${product.id})">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <button>View Product</button>
      </div>
    `)
    .join("");
}

displayBooksProducts();

// ============== OPEN PRODUCT PAGE ==============
function openProductPage(id) {
  window.location.href = `./product.html?id=${id}`;
}

window.openProductPage = openProductPage;