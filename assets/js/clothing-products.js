
// ============== CLOTHING PRODUCTS DATA ==============
const clothingProductsData = [
  {
    id: 101,
    name: "Modest Imported Denim Long Gown",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203231/2_al3g3t.jpg"
  },
  {
    id: 102,
    name: "Black & White Floral Asymmetrical Tunic Set",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203232/3_pb4s6d.jpg"
  },
  {
    id: 103,
    name: "black and white floral print dress",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203231/1_yuojrk.jpg"
  },
    {
    id: 104,
    name: "blue and white floral print dress",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765472406/download_7_ftccwv.jpg"
  },
  {
    id: 105,
    name: "purple and white floral print dress",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765472405/download_8_kbs7kv.jpg"
  },
  {
    id: 106,
    name: "peach and white floral print dress",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765718288/dress_qj9sjg.jpg"
  },
    {
    id: 107,
    name: "light blue and white floral print dress",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765718686/dress_hbfaft.jpg"
  },
  {
    id: 108,
    name: "purple and white floral print dress",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765718225/dress_eb4kjd.jpg"
  }

];
// Container
const clothingContainer = document.getElementById("clothingProducts");

// ============== RENDER PRODUCTS ==============
function displayClothingProducts() {
  if (!clothingContainer) return;

  clothingContainer.innerHTML = clothingProductsData
    .map(product => `
      <div class="product-card" onclick="openProductPage(${product.id})">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <button>View Product</button>
      </div>
    `)
    .join("");
}

displayClothingProducts();

// ============== OPEN PRODUCT PAGE ==============
function openProductPage(id) {
  window.location.href = `./product.html?id=${id}`;
}

// 🔥 MAKE THE FUNCTION GLOBAL
window.openProductPage = openProductPage;
