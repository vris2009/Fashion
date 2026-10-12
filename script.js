
var products = [
    {
        name: "Classic White Shirt",
        category: "Women",
        price: 899,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=80"
    },
    {
        name: "Everyday Denim",
        category: "Men",
        price: 1299,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80"
    },
    {
        name: "Soft Knit Sweater",
        category: "Women",
        price: 1499,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80"
    },
    {
        name: "Minimal Tote Bag",
        category: "Accessories",
        price: 599,
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=80"
    },
    {
        name: "Casual Jacket",
        category: "Men",
        price: 1899,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80"
    },
    {
        name: "Everyday Sunglasses",
        category: "Accessories",
        price: 499,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80"
    },
    {
        name: "Relaxed T-Shirt",
        category: "Men",
        price: 699,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80"
    },
    {
        name: "Weekend Outfit",
        category: "Women",
        price: 1599,
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80"
    }
];

// Variables
var cartCount = 0;
var productGrid = document.getElementById("productGrid");
var cartCountText = document.getElementById("cartCount");
var cartMessage = document.getElementById("cartMessage");

// Display products on the website
function showProducts(category) {
    productGrid.innerHTML = "";

    for (var i = 0; i < products.length; i++) {

        if (category === "All" || products[i].category === category) {

            var product = products[i];

            var card = document.createElement("div");
            card.className = "product-card";

            card.innerHTML =
                '<img src="' + product.image +
                '" alt="' + product.name + '">' +

                '<p class="product-category">' +
                product.category + '</p>' +

                '<h3 class="product-title">' +
                product.name + '</h3>' +

                '<div class="product-bottom">' +

                '<span class="product-price">₹' +
                product.price + '</span>' +

                '<button class="add-button" type="button">' +
                'Add to Cart</button>' +

                '</div>';

            // Add item to the demo cart
            var addButton = card.querySelector(".add-button");

            addButton.addEventListener("click", function () {
                cartCount = cartCount + 1;

                cartCountText.textContent = cartCount;

                cartMessage.textContent =
                    "Product added to your demo cart!";
            });

            productGrid.appendChild(card);
        }
    }
}

// Filter products by category
var filterButtons = document.querySelectorAll(".filter-button");

for (var i = 0; i < filterButtons.length; i++) {

    filterButtons[i].addEventListener("click", function () {

        for (var j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active");
        }

        this.classList.add("active");

        var selectedCategory = this.getAttribute("data-category");

        showProducts(selectedCategory);

        cartMessage.textContent = "";
    });
}

// Mobile navigation menu
var menuButton = document.getElementById("menuButton");
var navbar = document.getElementById("navbar");

menuButton.addEventListener("click", function () {

    navbar.classList.toggle("show");

});

// Close the mobile menu after clicking a link
var navItems = navbar.querySelectorAll("a");

for (var i = 0; i < navItems.length; i++) {

    navItems[i].addEventListener("click", function () {
        navbar.classList.remove("show");
    });

}

// Cart button
var cartButton = document.getElementById("cartButton");

cartButton.addEventListener("click", function () {

    if (cartCount === 0) {
        cartMessage.textContent = "Your cart is empty.";
    } else {
        cartMessage.textContent =
            "You have " + cartCount + " item(s) in your demo cart.";
    }

    document.getElementById("collections").scrollIntoView({
        behavior: "smooth"
    });

});

// Newsletter form
var newsletterForm = document.getElementById("newsletterForm");
var newsletterMessage = document.getElementById("newsletterMessage");

newsletterForm.addEventListener("submit", function (event) {

    event.preventDefault();

    newsletterMessage.textContent =
        "Thank you for subscribing!";

    newsletterForm.reset();

});

// Display the current year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Show all products when the website opens
showProducts("All");
