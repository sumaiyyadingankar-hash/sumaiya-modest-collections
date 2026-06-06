// ============== ACCESSORIES PRODUCTS DATA ==============
const accessoriesProductsData = [
  {
    id: 201,
    name: "Gold Floral Pearl Headband",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203257/2_lvjh8a.jpg"
  },
  {
    id: 202,
    name: "Gaiety Women’s Rhinestone Watch Set",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203256/1_li9cof.jpg"
  },
  {
    id: 203,
    name: "Strathberry Leather Chain Bag",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203258/3_dhqg9h.jpg"
  },
  {
    id: 204, name: "Flower Beaded Bracelet", price: "₹2000",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765719956/bracelet_ylm3vb.jpg",
  }
];

// Container
const accessoriesContainer = document.getElementById("accessoriesProducts");

// ============== RENDER PRODUCTS ==============
function displayAccessoriesProducts() {
  if (!accessoriesContainer) return;

  accessoriesContainer.innerHTML = accessoriesProductsData
    .map(product => `
      <div class="product-card" onclick="openProductPage(${product.id})">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <button>View Product</button>
      </div>
    `)
    .join("");
}

displayAccessoriesProducts();

// ============== OPEN PRODUCT PAGE ==============
function openProductPage(id) {
  window.location.href = `./product.html?id=${id}`;
}

window.openProductPage = openProductPage;