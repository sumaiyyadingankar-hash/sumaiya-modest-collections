// blog-page.js

// 1. Add all your blogs in an array
const blogsData = [
  {
    id: 1,
    title: "Elegant & Comfortable Outfits for Home and Festivals",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765195137/1_wc9whk.jpg",
    content: `<p>Women love clothing that feels comfortable at home yet looks beautiful for special days. Soft cotton kurtis, long abayas, and loose maxi dresses are perfect for daily wear — they’re breathable, modest, and easy to move in. 
    <br><br>
Comfort doesn’t mean compromising on style. You can mix and match simple pieces with delicate accessories to create a look that feels both effortless and elegant. Fabrics like linen, chiffon, and soft cotton keep you cool during the day, while gentle embroidery or subtle prints add a touch of charm.
<br><br>
For festive occasions, layering with lightweight scarves, stylish jackets, or statement jewelry instantly elevates the outfit without sacrificing comfort. Choosing colors that complement your skin tone and selecting cuts that flatter your body shape can make even simple outfits look special.
<br><br>
Finally, don’t forget the little details — comfortable shoes, a neat hairstyle, and a soft fragrance can complete the look. The key is to feel confident, graceful, and at ease, whether you’re enjoying a quiet day at home or attending a family gathering.</p>`
  },
  {
    id: 2,
    title: "Small Accessories, Big Impact",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765195137/2_egc62q.jpg",
    content: `<p>Sometimes, it’s the little things that make the biggest difference.
A delicate bracelet, a soft scarf, or a simple pair of earrings can instantly elevate your look — without being loud or overwhelming.
<br><br>
Accessories are more than just add-ons. They reflect your personality, your mood, and your confidence. A minimal bag can add elegance, a watch can bring grace, and subtle jewellery can turn an ordinary outfit into something special.
<br><br>
You don’t need a full makeover to feel beautiful.
Just the right accessory, chosen with love, can speak for you.</p>`
  },
  {
    id: 3,
    title: "Perfume: The Final Touch",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765195137/3_awo1p9.jpg",
    content: `<p>Perfume is more than just a fragrance — it’s a feeling.
A soft floral, a warm musky note, or a fresh citrus scent can instantly uplift your mood and leave a gentle memory behind.
<br><br>
The right perfume doesn’t overpower; it complements you. It becomes a quiet part of your presence, noticed without being loud. Just a few sprays are enough to make you feel confident and refreshed throughout the day.
<br><br>
Because sometimes, a beautiful scent is all you need to feel complete.</p>`
  },
  {
    id: 4,
    title: "Books: Little Worlds Between Pages",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765195137/4_r1epzu.jpg",
    content: `<p>Books carry stories, lessons, and quiet moments of reflection.
They give us space to pause, think, and see life from different perspectives.
<br><br>
Whether it’s a few pages before sleep or a peaceful afternoon read, books gently shape our thoughts and deepen our understanding. They don’t rush us — they grow with us.
<br><br>
In a noisy world, books remain patient companions, always ready to teach, comfort, and inspire.</p>`
  },
  {
    id: 5,
    title: "Thoughtful Gifts for Every Woman",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765195137/5_o3jble.jpg",
    content: `<p>A meaningful gift doesn’t have to be expensive. What matters most is the thought behind it and the joy it brings.
Consider what the person truly loves or enjoys — a pretty scarf, a delicate bracelet, a scented candle, or even a stylish bag can make them smile.
<br><br>
Sometimes, the simplest gifts leave the biggest impact because they show you truly know and care about them.
Gift-giving is about connection, thoughtfulness, and creating little moments of happiness that can be remembered for years.</p>`
  },
  {
    id: 6,
    title: "Create a Cozy Room on a Budget",
    image: "https://res.cloudinary.com/dzpjquuvs/image/upload/v1765195138/6_h1e6zw.jpg",
    content: `<p>A cozy room is all about the little touches that make it feel warm and inviting. Soft lights, gentle colors, and cute frames can instantly transform a space.
Adding plants not only livens up a room but also brings freshness and a sense of calm.
<br><br>
Keeping things tidy and organized creates a peaceful environment that’s easy to relax in.
You don’t need a big budget — choose pieces thoughtfully that reflect your personality and make your space feel like home.</p>`
  }
];

// 2. Get blog ID from URL
const urlParams = new URLSearchParams(window.location.search);
const blogId = parseInt(urlParams.get("id"));

// 3. Select HTML elements
const blogHeading = document.querySelector(".blog-heading");

const blogCover = document.querySelector(".blog-cover");
const blogContent = document.querySelector(".blog-content");

// 4. Find the blog by ID
const blog = blogsData.find(b => b.id === blogId);

// 5. Populate the blog page
if (blog) {
  blogHeading.innerHTML = blog.title;
  blogCover.src = blog.image;
  blogCover.alt = blog.title;
  blogContent.innerHTML = blog.content;
} else {
  blogHeading.innerHTML = "Blog not found";
  blogContent.innerHTML = `<p>Sorry, the blog you are looking for does not exist.</p>`;
}