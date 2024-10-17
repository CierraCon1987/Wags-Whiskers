const product = {
    title: "Classic Dog Toy - Treat Dispensing",
    price: 16.99,
    description: "The classic red KONG toy is the ultimate durable and versatile chew toy, perfect for keeping your pet entertained while promoting healthy teeth and gums!",
    features: [
        "Mentally stimulating toy, offering enrichment by helping satisfy a dog's instinctual needs.",
        "KONG classic red rubber formula for average chewers.",
        "Unpredictable bounce for games of fetch.",
        "Great for stuffing with KONG Easy Treat, Snacks, or Ziggies."
    ],
    itemNumber: "#5354544",
    ratings: "★★★★☆",
    similarProducts: [
        {
            title: "KONG Ziggies Dog Treats",
            image: "images/kong-ziggies.jpg" // Replace with your actual image path
        },
        {
            title: "KONG Easy Treat Dog Treat - Peanut Butter",
            image: "images/kong-peanut-butter.jpg" // Replace with your actual image path
        },
        {
            title: "Joyhound Electronic Ball Launcher Dog Toy",
            image: "images/joyhound-launcher.jpg" // Replace with your actual image path
        },
        {
            title: "Outward Hound Dog Brick Interactive Dog Puzzle",
            image: "images/outward-hound.jpg" // Replace with your actual image path
        }
    ]
};

// Populate product details
document.getElementById('product-title').innerText = product.title;
document.getElementById('product-price').innerText = `$${product.price.toFixed(2)}`;
document.getElementById('product-description').innerText = product.description;
document.getElementById('item-number').innerText = `Item ${product.itemNumber}`;
document.getElementById('product-reviews').innerText = product.ratings;

// Populate product features
const featuresList = document.createElement('ul');
product.features.forEach(feature => {
    const li = document.createElement('li');
    li.innerText = feature;
    featuresList.appendChild(li);
});
document.getElementById('product-features').appendChild(featuresList);

// Populate similar products
const similarProductsGrid = document.getElementById('similar-products-grid');
product.similarProducts.forEach(similar => {
    const col = document.createElement('div');
    col.className = "col-md-3";
    col.innerHTML = `
        <div class="card">
            <a href="product-detail.html?id=${similar.itemNumber}">
                <img src="${similar.image}" class="card-img-top" alt="${similar.title}">
            </a>
            <div class="card-body">
                <h5 class="card-title">${similar.title}</h5>
                <a href="product-detail.html?id=${similar.itemNumber}" class="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    `;
    similarProductsGrid.appendChild(col);
});

// Add to cart functionality (basic example)
document.getElementById('add-to-cart').addEventListener('click', () => {
    alert(`${product.title} has been added to your cart!`);
});
