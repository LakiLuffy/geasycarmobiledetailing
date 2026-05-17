document.getElementById("year").textContent = new Date().getFullYear();

const selectedDate = document.getElementById("selected-date");
const selectedPrice = document.getElementById("selected-price");
const serviceSelect = document.getElementById("service");

document.querySelectorAll(".slot-day").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".slot-day").forEach((day) => day.classList.remove("active"));
    button.classList.add("active");
    selectedDate.textContent = button.dataset.date;
  });
});

serviceSelect.addEventListener("change", () => {
  selectedPrice.textContent = `$${serviceSelect.value} due today`;
});

document.querySelector(".booking-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  button.textContent = "Stripe Checkout Needed";
  window.location.href = "tel:0478249636";
});
