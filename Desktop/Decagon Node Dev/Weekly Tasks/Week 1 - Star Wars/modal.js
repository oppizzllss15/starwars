const searchFlightEl = document.getElementById("open-popup-btn");
const bookFlightEl = document.getElementById("dismiss-popup-btn");

searchFlightEl.addEventListener("click", () => {
  document.getElementsByClassName("popup")[0].classList.add("active");
});

bookFlightEl.addEventListener("click", () => {
  document.getElementsByClassName("popup")[0].classList.remove("active");
});

// console.log(__dirname, __filename);
