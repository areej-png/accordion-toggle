// Select all FAQ questions
const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
    // Add click event listener to each question
  question.addEventListener("click", () => {
    const parent = question.parentElement;

    // Remove active class from all FAQ items
    document.querySelectorAll(".faq-item").forEach(item => {
      item.classList.remove("active");
    });

    // Add active class to the clicked FAQ item
    parent.classList.add("active");
  });
});
