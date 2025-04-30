const buttons = document.querySelectorAll(".accordion-question");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !isExpanded);

    const answer = button.nextElementSibling;
    answer.classList.toggle("active");
  });
});
