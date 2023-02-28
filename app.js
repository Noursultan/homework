const answerButtons = document.querySelectorAll(".answer-button");

answerButtons.forEach(function (button) {
  
  button.addEventListener("click", function () {
    const answer = button.nextElementSibling;
    answer.classList.toggle("hidden");

    if (answer.classList.contains("hidden")) {
      button.textContent = "Show answer";
    } else {
      button.textContent = "Hide answer";
    }

  });
});