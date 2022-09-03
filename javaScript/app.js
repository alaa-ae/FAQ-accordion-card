let questions = document.querySelectorAll(".question"); //faq
let btns = document.querySelectorAll(".question-arrow"); //question
let answers = document.querySelectorAll(".answer");
let arrows = document.querySelectorAll(".arrow"); //arrow icon

let a = 0;
for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", function () {
    if (answers[i].classList.contains("hide")) {
      answers[i].classList.remove("hide");
      arrows[i].style.transform = "rotate(180deg)";
      questions[i].classList.add("questionView");
    } else {
      answers[i].classList.add("hide");
      arrows[i].style.transform = "rotate(360deg)";
      questions[i].classList.remove("questionView");
    }
  });
}
console.log(a);
