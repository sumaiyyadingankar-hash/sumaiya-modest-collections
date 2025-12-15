// =============== ALL PRODUCTS FROM ALL CATEGORIES ===============

// PRODUCT LIST
const featuredProductsData = [
  {
    id: 1,
    name: "Floral print maxi dress",
    price: 1499,
    category: "clothing",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765813890/dress_2_ubbcc2.jpg",
    desc: "A long, flowy maxi dress designed for a relaxed and elegant fit. "
  },
  {
    id: 2,
    name: "Denim Cotton Top with Buttons",
    price: 1299,
    category: "clothing",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765196260/2_ppeuvb.jpg",
    desc: "A soft, breathable denim-cotton blend crafted for all-day comfort."
  },
  {
    id: 3,
    name: "Red & White Floral Print Tunic/Dress with Lace Accents",
    price: 1999,
    category: "clothing",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765196264/3_nzrjl3.jpg",
    desc: "A beautifully crafted red and white floral tunic designed to bring a soft, feminine charm to your wardrobe."
  },
  {
    id: 4,
    name: "Pink Tunic with Sequin Sleeves",
    price: 2000,
    category: "clothing",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765262092/download_4_z8ou9g.jpg",
    desc: "A graceful pink tunic adorned with shimmering sequin sleeves, paired with crisp white trousers for a clean, elegant look."
  }
];

// Clothing
const clothingProductsData = [
  {
    id: 101,
    name: "Modest Imported Denim Long Gown",
    price: 1499,
    category: "clothing",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203231/2_al3g3t.jpg",
    desc: "This Modest Western Denim Gown is crafted from soft crush/imported denim fabric, offering complete comfort with a beautifully covered silhouette."
  },
  {
    id: 102,
    name: "Black & White Floral Asymmetrical Tunic Set",
    price: 799,
    category: "clothing",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203232/3_pb4s6d.jpg",
    desc: "Lightweight floral tunic top designed with a unique asymmetrical cut and layered over a classic black dress."
  },
  {
    id: 103,
    name: "black and white floral print dress",
    price: 900,
    category: "clothing",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203231/1_yuojrk.jpg",
    desc: "Classic black–white floral print dress crafted in lightweight, comfortable fabric for a chic, effortless look."
  },
  {
    id: 104,
    name: "blue and white floral print dress",
    price: 1900,
    category: "clothing",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765472406/download_7_ftccwv.jpg",
    desc: "Classic blue–white floral print dress crafted in lightweight, comfortable fabric for a chic, effortless look."
  },
  {
    id: 105,
    name: "light purple and white floral print dress",
    price: 900,
    category: "clothing",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765472405/download_8_kbs7kv.jpg", desc: "Classic lightpurple–white floral print dress crafted in lightweight, comfortable fabric for a chic, effortless look."
  },
  {
    id: 106,
    name: "peach and white floral print dress",
    price: 1200,
    category: "clothing",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765718288/dress_qj9sjg.jpg",
    desc: "Classic peach–white floral print dress crafted in lightweight, comfortable fabric for a chic, effortless look."
  },
  {
    id: 107,
    name: "light blue and white floral print dress",
    price: 2450,
    category: "clothing",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765718686/dress_hbfaft.jpg",
    desc: "Classic lightblue–white floral print dress crafted in lightweight, comfortable fabric for a chic, effortless look."
  },
  {
    id: 108,
    name: "purple and white floral print dress",
    price: 3000,
    category: "clothing",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765718225/dress_eb4kjd.jpg", desc: "Classic purple–white floral print dress crafted in lightweight, comfortable fabric for a chic, effortless look."
  }

];

// Accessories
const accessoriesProductsData = [
  {
    id: 201,
    name: "Gold Floral Pearl Headband",
    price: 250,
    category: "accessories",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203257/2_lvjh8a.jpg",
    desc: "Lightweight gold-toned headband with floral details and pearl embellishments, ideal for parties and special occasions."
  },
  {
    id: 202,
    name: "Gaiety Women’s Rhinestone Watch Set",
    price: 1499,
    category: "accessories",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203256/1_li9cof.jpg",
    desc: "This Gaiety women’s set includes a soft pink strap watch and a dainty rhinestone bracelet—perfect for everyday elegance."
  },
  {
    id: 203,
    name: "Strathberry Leather Chain Bag",
    price: 2000,
    category: "accessories",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203258/3_dhqg9h.jpg",
    desc: "This Strathberry East/West shoulder bag blends tricolor leather with a refined chain strap for everyday sophistication."
  },
  {
    id: 204,
    name: "Flower Beaded Bracelet",
    price: 2000,
    category: "accessories",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765719956/bracelet_ylm3vb.jpg", desc: "This is a beaded bracelet with light blue and clear crystal beads and a flower charm. "
  }

];

// Beauty
const beautyProductsData = [
  {
    id: 301,
    name: "Nivea Lip Care balms",
    price: 299,
    category: "beauty",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765720338/lip_balms_c69hqe.jpg", desc: "Nivea Lip Care balms in Cherry, Blackberry, Strawberry, and Watermelon variants. "
  },
  {
    id: 302,
    name: "Dasique Rose Petal Shadow Palette",
    price: 399,
    category: "beauty",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203317/3_ydqqsc.jpg",
    desc: "A beautifully curated mix of rosy pinks and soft neutrals—perfect for everyday elegance or soft glam."
  },
  {
    id: 303,
    name: "Rasasi Hawas Eclat Eau de Parfum",
    price: 2049,
    category: "beauty",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765721338/rasasi_perfume_zolj5c.jpg",
    desc: " A luminous and captivating fragrance."
  },
  {
    id: 304,
    name: "Nivea Soft",
    price: 349,
    category: "beauty",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765720803/Nivea_cram_in8lqt.jpg", desc: "The item is Nivea Soft, a highly effective, intensive moisturizing cream for the face, body, and hands. "
  }
];

// Books
const booksProductsData = [
  {
    id: 401,
    name: "Healing with the Medicine of the Prophet",
    price: 259,
    category: "books",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203348/2_qj58gy.jpg",
    desc: "A comprehensive Islamic guide to health and healing, blending faith, natural medicine, and Prophetic teachings."
  },
  {
    id: 402,
    name: "The Disease and the Cure",
    price: 399,
    category: "books",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203348/3_qcdumw.jpg",
    desc: "A true gem by Imam al-Qayyim and a must read for Muslims looking to get closer to their creator. "
  },
  {
    id: 403,
    name: "The Sealed Nectar",
    price: 699,
    category: "books",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203345/1_iuxp9x.jpg",
    desc: "The Sealed Nectar presents the Seerah of the Prophet ﷺ in a clear, comprehensive, and easy-to-read format."
  },
  {
    id: 404,
    name: "Atomic Habits",
    price: 299,
    category: "books",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765211845/Atomic_Habits_tmmpj7.jpg",
    desc: "A practical guide to transforming your life through small, consistent habit changes that lead to remarkable results."
  }
];

// Gifts
const giftsProductsData = [
  {
    id: 501,
    name: "Pink Ribbed Ceramic Vase with Bow",
    price: 599,
    category: "gifts",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203390/1_maf1ih.jpg",
    desc: "A charming pink ribbed ceramic vase adorned with a delicate bow, perfect for flowers or home decor accents."
  },
  {
    id: 502,
    name: "Beautiful Wall Frames",
    price: 399,
    category: "gifts",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765212087/https___surl_li_jzllrt_mrpb3y.jpg",
    desc: "A curated set of six unframed botanical art prints, perfect for adding a natural, elegant touch to your walls."
  },
  {
    id: 503,
    name: "Premium Coffee Mug Set",
    price: 1399,
    category: "gifts",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203395/3_esujwp.jpg",
    desc: "Enjoy your coffee in style with these marble-patterned mugs, complete with luxurious gold handles."
  },
  {
    id: 504,
    name: "Glass Serving Tray with Compartments",
    price: 599,
    category: "gifts",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203392/2_dfeepy.jpg",
    desc: "A stylish octagonal glass serving dish with divided compartments, perfect for nuts, candies, or dried fruits."
  }
];

// Home Decor
const homeDecorProductsData = [
  {
    id: 601,
    name: "Handmade White and Gold Epoxy Clock",
    price: 499,
    category: "homeDecor",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203425/3_fkgiwz.jpg",
    desc: "A handcrafted wall clock made with white and brown/gold epoxy resin, adding a modern artistic touch to any space."
  },
  {
    id: 602,
    name: "Aromatic Scented Candles",
    price: 299,
    category: "homeDecor",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203422/2_nexadk.jpg",
    desc: "Long-lasting scented candle."
  },
  {
    id: 603,
    name: "Coffee Mix Ceramic Vase Set",
    price: 1299,
    category: "homeDecor",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203427/home-decor_v4tf9w.jpg",
    desc: "A set of ceramic vases in warm coffee-inspired shades, perfect for adding a cozy, stylish touch to your home decor."
  },
  {
    id: 604,
    name: "Crescent Moon Ceramic Night Light",
    price: 1599,
    category: "homeDecor",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765203420/1_my4wn8.jpg",
    desc: "A charming crescent moon-shaped night light made of ceramic, perfect for adding a soft, cozy glow to any room."
  }
];

// MERGE EVERYTHING
const allProducts = [
  ...featuredProductsData,
  ...clothingProductsData,
  ...accessoriesProductsData,
  ...beautyProductsData,
  ...booksProductsData,
  ...giftsProductsData,
  ...homeDecorProductsData
];

// MAKE GLOBAL
window.allProducts = allProducts;

