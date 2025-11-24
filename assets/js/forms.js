const fullFormHTML = `
  <h2 class="text-2xl font-semibold text-center mb-6">
    Companies House ID Verification Form
  </h2>

  <form id="orderForm" class="space-y-4 text-sm text-gray-700">

    <input name="fullName" type="text" placeholder="Full Name" class="w-full border px-4 py-2 rounded">

    <input name="address" type="text" placeholder="Residential Address" class="w-full border px-4 py-2 rounded">

    <input name="postcode" type="text" placeholder="Postcode" class="w-full border px-4 py-2 rounded">


    <input name="contactNumber" type="text" placeholder="Contact Number" class="w-full border px-4 py-2 rounded">

    <input name="email1" type="email" placeholder="Email 1" class="w-full border px-4 py-2 rounded">

    <select name="paymentGateway" class="w-full border px-4 py-2 rounded">
      <option value="">Select Payment Gateway</option>
      <option>Stripe</option>
      <option>PayPal</option>
    </select>

    <div class="pt-6">
      <button type="submit" class="w-full bg-black text-white py-3 rounded hover:bg-gray-900">
        PLACE ORDER
      </button>
    </div>

  </form>

  <p class="text-xs text-gray-600 mt-4 leading-relaxed">
    By clicking this checkbox, you agree to the terms and conditions...
  </p>
`;

// OPEN MODAL
function openOrderModal(planTitle) {
  const modal = document.getElementById("orderModal");
  const box = modal.querySelector(".modal-box");

  document.getElementById("orderModalContent").innerHTML = `
    <h2 class="text-xl font-semibold mb-4">${planTitle}</h2>
    ${fullFormHTML}
  `;

  modal.classList.remove("hidden");

  setTimeout(() => {
    box.classList.remove("scale-95", "opacity-0");
    box.classList.add("scale-100", "opacity-100");
  }, 10);
}

// CLOSE MODAL
function closeOrderModal() {
  const modal = document.getElementById("orderModal");
  const box = modal.querySelector(".modal-box");

  box.classList.remove("scale-100", "opacity-100");
  box.classList.add("scale-95", "opacity-0");

  setTimeout(() => {
    modal.classList.add("hidden");
  }, 200);
}

// CLOSE IF CLICK OUTSIDE
document.getElementById("orderModal").addEventListener("click", function(e) {
  if (e.target.id === "orderModal") closeOrderModal();
});


// =======================
// FORM SUBMISSION HANDLER
// =======================
document.addEventListener("submit", async function (e) {
  if (e.target.id === "orderForm") {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Get plan title
    const planTitle = document.querySelector("#orderModalContent h2").innerText;
    formData.append("planTitle", planTitle);

    const response = await fetch("sendmail.php", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.status === "success") {
      alert("Your order has been submitted successfully!");
      closeOrderModal();
    } else {
      alert("Error: " + result.message);
    }
  }
});
