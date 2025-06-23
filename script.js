const quiz = [
  {
    question: "Quelle est la principale source d'énergie à Wallis et Futuna ?",
    answers: ["Le solaire", "Le pétrole", "L'éolien", "L’hydroélectricité"],
    correct: 1
  },
  {
    question: "Quel animal est endémique à Futuna ?",
    answers: ["Le pigeon impérial", "Le caméléon bleu", "La chauve-souris géante", "Le cochon sauvage"],
    correct: 0
  }
];

let current = 0;

function showQuestion() {
  const q = quiz[current];
  document.getElementById("question").textContent = q.question;
  const container = document.getElementById("answers");
  container.innerHTML = "";

  q.answers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => {
      if (i === q.correct) {
        alert("✅ Bonne réponse !");
      } else {
        alert("❌ Mauvaise réponse");
      }
      current++;
      if (current < quiz.length) {
        showQuestion();
      } else {
        document.getElementById("question").textContent = "🎉 Fin du quiz !";
        container.innerHTML = "";
      }
    };
    container.appendChild(btn);
  });
}

document.addEventListener("DOMContentLoaded", showQuestion);
