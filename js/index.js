const menuButton = document.getElementById("menu-open");
const closeButton = document.getElementById("menu-close");

const handleMenuClick = () => {
  menuButton.classList.add("hidden");
  closeButton.classList.remove("hidden");
};

const handleCloseClick = () => {
  menuButton.classList.remove("hidden");
  closeButton.classList.add("hidden");
};

menuButton.addEventListener("click", handleMenuClick);
closeButton.addEventListener("click", handleCloseClick);
