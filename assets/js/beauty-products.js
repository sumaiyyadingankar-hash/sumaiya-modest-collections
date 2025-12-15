// ============== BEAUTY PRODUCTS DATA ==============
const beautyProductsData = [
  {
    id: 301,
    name: "Nivea Lip Care balms",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765720338/lip_balms_c69hqe.jpg"
  },
  {
    id: 302,
    name: "Dasique Rose Petal Shadow Palette",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203317/3_ydqqsc.jpg"
  },
  {
    id: 303,
    name: "Rasasi Hawas Eclat Eau de Parfum",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765721338/rasasi_perfume_zolj5c.jpg"
  },
  {
    id: 304,
    name: "Nivea Soft",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765720803/Nivea_cram_in8lqt.jpg"
  }
];

// Container
const beautyContainer = document.getElementById("beautyProducts");

// ============== RENDER BEAUTY PRODUCTS ==============
function displayBeautyProducts() {
  if (!beautyContainer) return;

  beautyContainer.innerHTML = beautyProductsData
    .map(product => `
      <div class="product-card" onclick="openProductPage(${product.id})">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <button>View Product</button>
      </div>
    `)
    .join("");
}

displayBeautyProducts();

// ============== OPEN PRODUCT PAGE ==============
function openProductPage(id) {
  window.location.href = `./product.html?id=${id}`;
}

window.openProductPage = openProductPage;