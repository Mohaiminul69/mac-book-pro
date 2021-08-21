/*
<-------------------- Event Listeners Calling Functions Start -------------------->
<-------------------- Event Listeners Calling Functions Start -------------------->
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
<-------------------- Event Listeners Calling Functions End -------------------->
<-------------------- Event Listeners Calling Functions End -------------------->
*/

/*
<-------------------- Updating Each Table Row Price Start -------------------->
<-------------------- Updating Each Table Row Price Start -------------------->
*/

function updatePrice(moreOption, price) {
  const extraCost = document.getElementById(moreOption + "-price");
  extraCost.innerHTML = price;
  updatTableTotal();
}

/*
<-------------------- Updating Each Table Row Price End -------------------->
<-------------------- Updating Each Table Row Price End -------------------->
*/

/*
<-------------------- Updating Total Table Price Start -------------------->
<-------------------- Updating Total Table Price Start -------------------->
*/

function updatTableTotal() {
  const memoryPrice = document.getElementById("memory-price");
  const storagePrice = document.getElementById("storage-price");
  const deliveryPrice = document.getElementById("delivery-price");
  const applyBtn = document.getElementById("code-apply-btn");
  applyBtn.removeAttribute("disabled");
  const tableTotal =
    1299 +
    parseInt(memoryPrice.innerText) +
    parseInt(storagePrice.innerText) +
    parseInt(deliveryPrice.innerText);
  document.getElementById("table-total-price").innerText = tableTotal;
  promoTotal(tableTotal);
}

/*
<-------------------- Updating Total Table Price End -------------------->
<-------------------- Updating Total Table Price End -------------------->
*/

/*
<-------------------- Updating the Total Price Start -------------------->
<-------------------- Updating the Total Price Start -------------------->
*/

function promoTotal(tableTotal) {
  document.getElementById("promo-total-price").innerText = tableTotal;
}

/*
<-------------------- Updating the Total Price End -------------------->
<-------------------- Updating the Total Price End -------------------->
*/

/*
<-------------------- Verifying the Promo Code & Updating Total Price after using Promo Code Start -------------------->
<-------------------- Verifying the Promo Code & Updating Total Price after using Promo Code Start -------------------->
*/

function verifyPromoCode() {
  const promoCode = "stevekaku";
  const userInput = document.getElementById("promocode-input");
  const applyBtn = document.getElementById("code-apply-btn");
  const userInputValue = document.getElementById("promocode-input").value;
  const beforePromoTotal = parseInt(
    document.getElementById("promo-total-price").innerText
  );
  const afterPromoTotal = beforePromoTotal - beforePromoTotal / 5;
  if (userInputValue == promoCode) {
    document.getElementById("promo-total-price").innerText = afterPromoTotal;
    applyBtn.setAttribute("disabled", true);
  }
  userInput.value = "";
}

/*
<-------------------- Verifying the Promo Code & Updating Total Price after using Promo Code End -------------------->
<-------------------- Verifying the Promo Code & Updating Total Price after using Promo Code End -------------------->
*/
