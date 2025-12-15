// ============== FEATURED PRODUCTS DATA ==============
const featuredProductsData = [
  {
    id: 1,
    name: "Floral print maxi dress ",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765813890/dress_2_ubbcc2.jpg"
  },
  {
    id: 2,
    name: "Denim Cotton Top",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765196260/2_ppeuvb.jpg"
  },
  {
    id: 3,
    name: "Red & White Floral Print Tunic",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765196264/3_nzrjl3.jpg"
  },
  {
    id: 4,
    name: "Pink Tunic with Sequin Sleeves",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765262092/download_4_z8ou9g.jpg"
  }
];

// Render Featured Products on Home Page
const container = document.getElementById("featuredProducts");

function displayFeaturedProducts() {
  container.innerHTML = featuredProductsData
    .map(product => `
      <div class="product-card" onclick="openProductPage(${product.id})">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <button>View Product</button>
      </div>
    `)
    .join("");
}

displayFeaturedProducts();

// When a product is clicked
function openProductPage(id) {
  window.location.href = `./pages/product.html?id=${id}`;
}

