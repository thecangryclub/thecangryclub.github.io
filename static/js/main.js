let cartItems = 0;

function updateCartCount() {
    const counter = document.getElementById("cart-count");
    if (counter) {
        counter.textContent = cartItems;
    }
function removeFromCart() {
    if (cartItems > 0) {
        cartItems--;
        updateCartCount();
    }
}
}


console.log("script cargado");
/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link"),
  navMenu = document.getElementById("nav-menu");

function linkAction() {
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const section = document.querySelectorAll(".section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY >= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

/*===== CHANGE COLOR HEADER =====*/
window.onscroll = () => {
  const nav = document.getElementById("header");
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
};

/*===== ZONA DESCUENTOS =====*/
document.querySelectorAll(".sneaker").forEach(product => {

    const oldPriceEl = product.querySelector(".price-old");
    const newPriceEl = product.querySelector(".price-new");
    const badge = product.querySelector(".discount-badge");

    if(oldPriceEl && newPriceEl){

        let oldPrice = oldPriceEl.textContent.replace(/[^0-9]/g,"");
        let newPrice = newPriceEl.textContent.replace(/[^0-9]/g,"");

        oldPrice = parseInt(oldPrice);
        newPrice = parseInt(newPrice);

        let discount = Math.round(((oldPrice - newPrice) / oldPrice) * 100);

        let emoji = "";

        if(discount >= 50) emoji = "👑🔥";
        else if(discount >= 45) emoji = "⚡";
        else if(discount >= 40) emoji = "🧨";
        else if(discount >= 35) emoji = "💥";
        else if(discount >= 30) emoji = "🚀";
        else if(discount >= 25) emoji = "🔥🔥";
        else if(discount >= 20) emoji = "🔥";
        else if(discount >= 15) emoji = "😎";
        else if(discount >= 10) emoji = "😉";
        else if(discount >= 5) emoji = "🙂";

        if(discount > 0){
            badge.textContent = "-" + discount + "% " + emoji;
        }

    }

});

// ==========================
// PARALLAX GRAFFITI EFFECT
// ==========================

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    const graffiti = document.body;

    graffiti.style.setProperty(
        "--bg-move",
        `${scrollY * 0.09}px`
    );
});
function toggleCart() {
    const cart = document.querySelector(".cart");
    cart.classList.toggle("open");
}
function toggleCart() {
    const cart = document.getElementById("cart");
    cart.classList.toggle("open");
}
