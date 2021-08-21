/*
<-------------------- Function Calling Event Listeners -------------------->
<-------------------- Function Calling Event Listeners -------------------->
<-------------------- Function Calling Event Listeners -------------------->
*/

document
  .getElementById("memory-default")
  .addEventListener("click", function () {
    updatePrice("memory", 0);
  });
document.getElementById("memory-extra").addEventListener("click", function () {
  updatePrice("memory", 180);
});
document.getElementById("storage-256").addEventListener("click", function () {
  updatePrice("storage", 0);
});
document.getElementById("storage-512").addEventListener("click", function () {
  updatePrice("storage", 100);
});
document.getElementById("storage-1024").addEventListener("click", function () {
  updatePrice("storage", 180);
});
document
  .getElementById("normal-delivery")
  .addEventListener("click", function () {
    updatePrice("delivery", 0);
  });
document
  .getElementById("early-delivery")
  .addEventListener("click", function () {
    updatePrice("delivery", 20);
  });
document
  .getElementById("code-apply-btn")
  .addEventListener("click", function () {
    verifyPromoCode();
  });

/*
<-------------------- Function Calling Event Listeners -------------------->
<-------------------- Function Calling Event Listeners -------------------->
<-------------------- Function Calling Event Listeners -------------------->
*/

function updatePrice(moreOption, price) {
  const extraCost = document.getElementById(moreOption + "-price");
  extraCost.innerHTML = price;
  updatTableTotal();
}

function updatTableTotal() {
  const memoryPrice = document.getElementById("memory-price");
  const storagePrice = document.getElementById("storage-price");
  const deliveryPrice = document.getElementById("delivery-price");
  const tableTotal =
    1299 +
    parseInt(memoryPrice.innerText) +
    parseInt(storagePrice.innerText) +
    parseInt(deliveryPrice.innerText);
  document.getElementById("table-total-price").innerText = tableTotal;
  promoTotal(tableTotal);
}

function verifyPromoCode() {
  const promoCode = "stevekaku";
  const userInput = document.getElementById("promocode-input").value;
  const beforePromoTotal = parseInt(
    document.getElementById("promo-total-price").innerText
  );
  const afterPromoTotal = Math.floor(beforePromoTotal - beforePromoTotal / 5);
  if (userInput == promoCode) {
    document.getElementById("promo-total-price").innerText = afterPromoTotal;
  }
  userInput.value = "";
}

function promoTotal(tableTotal) {
  document.getElementById("promo-total-price").innerText = tableTotal;
}
