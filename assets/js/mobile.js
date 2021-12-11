const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const menuCloseGen = doc.querySelector(".closegen");
const menuCloseSm = doc.querySelector(".closesm");
const menuCloseRisk = doc.querySelector(".closegym");
const menuCloseMit = doc.querySelector(".closerestaurant");
const menuClosePrev = doc.querySelector(".closepsycho");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuCloseGen.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuCloseSm.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuCloseRisk.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuCloseMit.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

menuClosePrev.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
