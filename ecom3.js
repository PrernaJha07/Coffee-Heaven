/*let cartItems = [];
let boughtItems = [];

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

function addToCart(item) {
    cartItems.push(item);
    updateList("cartItems", cartItems);
}

function buyItem(item) {
    boughtItems.push(item);
    updateList("boughtItems", boughtItems);
}

function updateList(elementId, items) {
    const list = document.getElementById(elementId);
    list.innerHTML = "";
    items.forEach((item, index) => {
        list.innerHTML += `<li>${item} <button class="cancel-btn" onclick="removeItem('${elementId}', ${index}, event)">X</button></li>`;
    });
}

function removeItem(listType, index, event) {
    event.stopPropagation(); // ✅ Prevent menu from closing when canceling an item

    if (listType === "cartItems") {
        cartItems.splice(index, 1);
    } else {
        boughtItems.splice(index, 1);
    }
    updateList(listType, listType === "cartItems" ? cartItems : boughtItems);
}

// Hide menu when clicking outside, but NOT when clicking inside or canceling items
document.addEventListener("click", function (event) {
    const menu = document.getElementById("menu");
    const button = document.querySelector(".menu-btn");

    // ✅ Only hide if clicking outside both menu & button
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove("show");
    }
});
*/

let cartItems = [];
let boughtItems = [];

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

function addToCart(item) {
    cartItems.push(item);
    updateList("cartItems", cartItems);
}

function orderNow(item) {
    boughtItems.push(item);
    updateList("boughtItems", boughtItems);
}

function updateList(elementId, items) {
    const list = document.getElementById(elementId);
    list.innerHTML = "";
    items.forEach((item, index) => {
        list.innerHTML += `<li>${item} <button class="cancel-btn" onclick="removeItem('${elementId}', ${index}, event)">X</button></li>`;
    });
}

function removeItem(listType, index, event) {
    event.stopPropagation();
    if (listType === "cartItems") {
        cartItems.splice(index, 1);
    } else {
        boughtItems.splice(index, 1);
    }
    updateList(listType, listType === "cartItems" ? cartItems : boughtItems);
}

// Hide menu when clicking outside
document.addEventListener("click", function (event) {
    const menu = document.getElementById("menu");
    const button = document.querySelector(".menu-btn");

    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove("show");
    }
});
