const bodyEl = document.getElementsByTagName("body")[0];
const navEl = document.getElementsByTagName("nav")[0];

const menuButton = document.getElementById("menuOpen");
const closeButton = document.getElementById("menuClose");
const logoIconContainer = document.getElementById("logoIconContainer");
const linksContainer = document.getElementById("linksContainer");
const actionsContainer = document.getElementById("actionsContainer");

const handleMenuClick = () => {
  menuButton.classList.add("hidden");
  closeButton.classList.remove("hidden");

  bodyEl.classList.remove("bg-gradient-to-br", "pt-4");
  bodyEl.classList.add("pt-8"),
    navEl.classList.add("flex", "flex-col", "gap-6", "pb-4", "h-[90vh]");

  logoIconContainer.classList.remove("py-4");

  linksContainer.classList.remove("hidden", "self-center");
  linksContainer.classList.add(
    "flex",
    "flex-col",
    "gap-2",
    "grow",
    "border-2",
    "border-pink-500"
  );
  Object.values(linksContainer.getElementsByTagName("button")).forEach(
    (button) => {
      button.classList.remove(
        "focus:ring",
        "focus:ring-4",
        "focus:ring-indigo-200"
      );
      button.classList.add(
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

  actionsContainer.classList.remove("hidden", "self-center");
  actionsContainer.classList.add("flex", "flex-col", "gap-4", "content-left");
};

const handleCloseClick = () => {
  menuButton.classList.remove("hidden");
  closeButton.classList.add("hidden");

  bodyEl.classList.add("bg-gradient-to-br", "pt-4");
  bodyEl.classList.remove("pt-8"),
    navEl.classList.remove(
      "flex",
      "flex-col",
      "gap-6",
      "pt-8",
      "pb-4",
      "h-[90vh]"
    );

  logoIconContainer.classList.add("py-4");

  linksContainer.classList.add("hidden", "self-center");
  linksContainer.classList.remove("flex", "flex-col", "gap-2", "grow");
  Object.values(linksContainer.getElementsByTagName("button")).forEach(
    (button) => {
      button.classList.add(
        "focus:ring",
        "focus:ring-4",
        "focus:ring-indigo-200"
      );
      button.classList.remove(
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

  actionsContainer.classList.add("hidden", "self-center");
  actionsContainer.classList.remove(
    "flex",
    "flex-col",
    "gap-4",
    "content-left"
  );
};

menuButton.addEventListener("click", handleMenuClick);
closeButton.addEventListener("click", handleCloseClick);
