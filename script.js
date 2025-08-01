document.addEventListener("DOMContentLoaded", () => {
  // Function to update the total price
  function updateTotal() {
    const cards = document.querySelectorAll(".card");
    let total = 0;

    cards.forEach((card) => {
      const priceEl = card.querySelector(".unit-price");
      const quantityEl = card.querySelector(".quantity");

      if (priceEl && quantityEl) {
        const price = parseFloat(priceEl.textContent.replace("$", ""));
        const quantity = parseInt(quantityEl.textContent);
        total += price * quantity;
      }
    });

    document.querySelector(".total").textContent = `${total} $`;
  }

  // Increase quantity
  document.querySelectorAll(".fa-plus-circle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const quantityEl = btn.nextElementSibling;
      let quantity = parseInt(quantityEl.textContent);
      quantity++;
      quantityEl.textContent = quantity;
      updateTotal();
    });
  });

  // Decrease quantity
  document.querySelectorAll(".fa-minus-circle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const quantityEl = btn.previousElementSibling;
      let quantity = parseInt(quantityEl.textContent);
      if (quantity > 0) {
        quantity--;
        quantityEl.textContent = quantity;
        updateTotal();
      }
    });
  });

  // Delete product
  document.querySelectorAll(".fa-trash-alt").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cardBody = btn.closest(".card-body");
      cardBody.remove();
      updateTotal();
    });
  });

  // Toggle like (heart color)
  document.querySelectorAll(".fa-heart").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("liked");
      btn.style.color = btn.classList.contains("liked") ? "red" : "black";
    });
  });

  // Initial total calculation
  updateTotal();
});
