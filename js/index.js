const bodyEl = document.getElementsByTagName("body")[0];
const navEl = document.getElementsByTagName("nav")[0];

const menuButton = document.getElementById("menu-open");
const closeButton = document.getElementById("menu-close");
const logoIconContainer = document.getElementById("logoIconContainer");
const linksContainer = document.getElementById("linksContainer");
const actionsContainer = document.getElementById("actionsContainer");
console.log();
// TODO: select all buttons within the links container
console.log(
  Object.values(linksContainer.children).map(
    (butt, idx) => linksContainer.children[idx].classList
  )
);
// TODO: select all buttons within actions container

const handleMenuClick = () => {
  menuButton.classList.add("hidden");
  closeButton.classList.remove("hidden");
  bodyEl.classList.remove(
    "pt-4",
    "bg-gradient-to-br",
    "from-[#F9FAFB]",
    "to-[#D2D6DB]",
    "px-4"
  );
  bodyEl.classList.add();
  navEl.classList.remove("pt-4");
  navEl.classList.add(
    "border-2",
    "border-yellow-500",
    "flex",
    "flex-col",
    "gap-6",
    "px-4",
    "pt-8",
    "pb-4"
  );
  logoIconContainer.classList.remove("py-3");
  linksContainer.classList.remove("hidden", "self-center");
  linksContainer.classList.add(
    "border-2",
    "border-pink-400",
    "flex",
    "flex-col",
    "gap-2",
    "grow"
  );

  Object.values(linksContainer.getElementsByTagName("button")).forEach(
    (butt) => {
      butt.classList.remove(
        "focus:ring",
        "focus:ring-4",
        "focus:ring-indigo-200"
      );
      butt.classList.add(
        "gap-3",
        "px-3",
        "py-2",
        "text-left",
        "hover:bg-neutral-50",
        "active:bg-neutral-50",
        "active:text-neutral-900"
      );
    }
  );

  actionsContainer.classList.remove("hidden");
};

const handleCloseClick = () => {
  menuButton.classList.remove("hidden");
  closeButton.classList.add("hidden");
};

menuButton.addEventListener("click", handleMenuClick);
closeButton.addEventListener("click", handleCloseClick);
