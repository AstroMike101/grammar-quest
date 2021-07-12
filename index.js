 
let btnSound = document.querySelector("#bubble-sound");
let musicSound = document.querySelector("#music-sound");
let musicOnBtn = document.querySelector('.musicOnBtn');
let musicOffBtn = document.querySelector('.musicOffBtn')
let start = document.querySelector(".start-btn");
let body = document.querySelector(".app");




musicOffBtn.addEventListener("click", () => {
  musicSound.pause();
})

musicOnBtn.addEventListener("click", () => {
  musicSound.play();
  
})

start.addEventListener("mouseover", () => {
  btnSound.play();
  
  
});

start.addEventListener("click", () => {
  musicSound.play();
  document.querySelector(".hero-heading").remove();
  start.remove();
  main();
});

function main() {
  let header = document.createElement("div");
  let judge = document.createElement("h2");
  let options = Array.from({ length: 3 }, () =>
    document.createElement("button")
  ); 
  body.appendChild(header);
  body.appendChild(judge);
  body.appendChild(options[0]);
  body.appendChild(options[1]);
  body.appendChild(options[2]);
  judge.textContent = "Choose the correct option";
  let nextbtn = document.createElement("button")

  random();
  
  function random() {
    let random = Math.ceil(Math.random() * quiz.length);
    for (let i = 0; i <= random; i++) {
      choices(
        quiz[i].question,
        quiz[i].answer,
        quiz[i].options[0],
        quiz[i].options[1],
        quiz[i].options[2],
        quiz[i].correct
      );
   
    }
    nextbtn.remove()
  }

  function next(){
    body.appendChild(nextbtn)
    nextbtn.textContent = "Next"
   
    judge.textContent = "Well done"; 
    nextbtn.addEventListener("click", random)
  }

  function choices(question, answer, option1, option2, option3, correct) {
    header.innerHTML = question;  
    for (let i = 0; i < quiz[0].options.length; i++) {
        
      options[i].addEventListener("click", () => {
        if (i === answer) {
          judge.textContent = "Correct";
          header.innerHTML = correct;
          setTimeout(() => {
           next() 
          }, 1000);
        } else {
          judge.textContent = "wrong"; 
        }
      });
    }

    options[0].textContent = option1;
    options[1].textContent = option2;
    options[2].textContent = option3;
  }
}

function makeQuiz(operator) {
  var quiz = [];
  for (let i = 0; i <= 20; i++) {
    var firstNumber = Math.floor(Math.random() * 13);
    var secondNumber = Math.floor(Math.random() * 13);
    if (operator == " + ") {
      var answer = firstNumber + secondNumber;
    } else if (operator == " - ") {
      var answer = firstNumber - secondNumber;
    } else if (operator == " * ") {
      var answer = firstNumber * secondNumber;
    } else {
      var answer = firstNumber / secondNumber;
    }
    let group = {
      question:
        firstNumber.toString() + operator + secondNumber.toString() + " = ???",
      options: [answer, "wrong", "wrong"],
      answer: 0,
      correct:
        firstNumber.toString() +
        operator +
        secondNumber.toString() +
        " = " +
        answer,
    };
    quiz.push(group);
  }
  return quiz;
}

const quiz = makeQuiz(" + ");


 