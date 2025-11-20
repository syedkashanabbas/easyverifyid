document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".faq-item");

  items.forEach(item => {
    const btn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const arrow = item.querySelector(".faq-arrow");

    btn.addEventListener("click", () => {
      const isOpen = answer.classList.contains("hidden");

      // Close all other FAQs
      document.querySelectorAll(".faq-answer").forEach(a => a.classList.add("hidden"));
      document.querySelectorAll(".faq-arrow").forEach(i => i.style.transform = "rotate(0deg)");

      // Toggle this one
      if (isOpen) {
        answer.classList.remove("hidden");
        arrow.style.transform = "rotate(90deg)";
      } else {
        answer.classList.add("hidden");
        arrow.style.transform = "rotate(0deg)";
      }
    });
  });
});
