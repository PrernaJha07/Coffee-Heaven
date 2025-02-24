let currentIndex = 0;
let cartItems = [];
let boughtItems = [];

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

function addToCart(item, price, image) {
    cartItems.push({ name: item, price: price, image: image });
    updateList("cartItems", cartItems);
    updateCartCount();
}

function updateCartCount() {
    document.getElementById("cart-count").textContent = cartItems.length;
}


function orderNow(item, price, image) {
    boughtItems.push({ name: item, price: price, image: image });
    updateList("boughtItems", boughtItems);
}

function updateList(elementId, items) {
    const list = document.getElementById(elementId);
    list.innerHTML = ""; // Clear previous list

    items.forEach((item, index) => {
        list.innerHTML += `
            <li>
                <img src="${item.image}" alt="${item.name}" class="menu-item-img">
                <div class="menu-item-details">
                    <span>${item.name} - $${item.price.toFixed(2)}</span>
                    <button class="cancel-btn" onclick="removeItem('${elementId}', ${index}, event)">X</button>
                </div>
            </li>`;
    });
}

function removeItem(listType, index, event) {
    event.stopPropagation(); // Prevent menu from closing

    if (listType === "cartItems") {
        cartItems.splice(index, 1);
    } else {
        boughtItems.splice(index, 1);
    }
    updateList(listType, listType === "cartItems" ? cartItems : boughtItems);
}

// Ensure menu hides only when clicking outside
document.addEventListener("click", function (event) {
    const menu = document.getElementById("menu");
    const button = document.querySelector(".menu-btn");

    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove("show");
    }
});

// Image slider fix
function slideImages() {
    const slider = document.querySelector('.slider-wrapper');
    const images = document.querySelectorAll('.slider-wrapper img');
    currentIndex = (currentIndex + 1) % images.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(slideImages, 3000); // Change image every 3 seconds
