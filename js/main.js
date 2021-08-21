/*
<-------------------- Event Listeners Calling Functions -------------------->
<-------------------- Event Listeners Calling Functions -------------------->
<-------------------- Event Listeners Calling Functions -------------------->
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
    //<-------------------- Calling the Verifying Promo Code Function -------------------->
    verifyPromoCode();
  });

/*
<------------------------- Function Number #1 ------------------------->
<-------------------- Updating Each Table Row Price -------------------->
<-------------------- Updating Each Table Row Price -------------------->
*/

function updatePrice(option, price) {
  const optionCost = document.getElementById(option + "-price");
  optionCost.innerHTML = price;
  updateTableTotal();
}

/*
<--------------------------- Function Number #2 --------------------------->
<-------------------- Updating Total Price of the table -------------------->
<-------------------- Updating Total Price of the table -------------------->
*/

function updateTableTotal() {
  const memoryPrice = document.getElementById("memory-price");
  const storagePrice = document.getElementById("storage-price");
  const deliveryPrice = document.getElementById("delivery-price");
  const applyBtn = document.getElementById("code-apply-btn");
  applyBtn.removeAttribute("disabled");

  //<-------------------- Calculating the Total price of the Table -------------------->
  const tableTotal =
    1299 +
    parseInt(memoryPrice.innerText) +
    parseInt(storagePrice.innerText) +
    parseInt(deliveryPrice.innerText);

  //<-------------------- Updating the Total price of the Table -------------------->
  document.getElementById("table-total-price").innerText = tableTotal;
  promoTotal(tableTotal);
}

/*
<----------------------- Function Number #3 ----------------------->
<-------------------- Updating the Total Price -------------------->
<-------------------- Updating the Total Price -------------------->
*/

function promoTotal(tableTotal) {
  document.getElementById("promo-total-price").innerText = tableTotal;
}

/*
<------------------------------------ Function Number #4 ------------------------------------>
<---------- Verifying the Promo Code & Updating Total Price after using Promo Code ---------->
<---------- Verifying the Promo Code & Updating Total Price after using Promo Code ---------->
*/

function verifyPromoCode() {
  const promoCode = "stevekaku";
  const userInputBox = document.getElementById("promocode-input");
  const userGivenCode = document.getElementById("promocode-input").value;
  const applyBtn = document.getElementById("code-apply-btn");

  //<-------------------- Calculating the discount price after using promo code -------------------->
  const beforePromoTotal = parseInt(
    document.getElementById("promo-total-price").innerText
  );
  const afterPromoTotal = beforePromoTotal - beforePromoTotal / 5;

  //<----------- Verifying the Input provided by the User Start & Disabling the Apply Button ----------->
  if (userGivenCode == promoCode) {
    document.getElementById("promo-total-price").innerText = afterPromoTotal;
    applyBtn.setAttribute("disabled", true);
  }

  //<-------------------- Making the inputfield Empty -------------------->
  userInputBox.value = "";
}
