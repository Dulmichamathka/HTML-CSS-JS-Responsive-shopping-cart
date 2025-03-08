//cart open close

let cartIcon = document.querySelector(".cart-icon");
let cartModel = document.querySelector(".cart-model");
let cartClose = document.querySelector(".close-btn");

cartIcon.onclick = () => {
  cartModel.classList.add("open-cart");
};
cartClose.onclick = () => {
  cartModel.classList.remove("open-cart");
};
