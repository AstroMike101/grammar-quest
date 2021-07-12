let btnSound = document.querySelector("#bubble-sound");
let musicSound = document.querySelector("#music-sound");
let musicBtn = document.querySelector('.musicBtn'); 
let start = document.querySelector(".start-btn");
let body = document.querySelector(".app");
let headerDiv = document.querySelector('.headerDiv');
let isPlaying = false;
let score = 0;

function musicStart(){
  if(isPlaying){
    musicSound.pause()
    isPlaying = false;
  }
  else{
    musicSound.play();
    isPlaying = true;
  } 
}
 
start.addEventListener("mouseover", () => {
  btnSound.play(); 
});

start.addEventListener("click", () => {
  musicStart();
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
  let choicesDiv = document.createElement('div');
  choicesDiv.classList.add('choicesDiv');
  let nextbtn = document.createElement("button") 
  let scoreBoard = document.createElement('p')
  scoreBoard.classList.add('scoreBoard')
  scoreBoard.textContent = 'Score: ' + score;

  
  headerDiv.insertBefore(scoreBoard,musicBtn);
  body.appendChild(header);
  body.appendChild(judge);
  body.appendChild(choicesDiv);
  choicesDiv.appendChild(options[0]);
  choicesDiv.appendChild(options[1]);
  choicesDiv.appendChild(options[2]);

  judge.classList.add("judge")
  header.classList.add("quiz-scr")
  judge.textContent = "Choose the correct option:";

  options[0].classList.add("choices")
  options[1].classList.add("choices")
  options[2].classList.add("choices")
  nextbtn.classList.add("nextBtn")

  random();
  
  function random() {
    let random = Math.ceil(Math.random() * quiz.length - 1);
    for (let i = 0; i <= random; i++) {
      choices(
        quiz[i].question,
        quiz[i].answer,
        quiz[i].options[0],
        quiz[i].options[1],
        quiz[i].options[2],
        quiz[i].correct
        );
        judge.textContent = "Choose the correct option"; 
      nextbtn.remove()
      
    }
  }
  
  function next(){
    body.appendChild(nextbtn)
    nextbtn.textContent = "Next"
    judge.textContent = "Well done!"
    nextbtn.addEventListener("click", random)
  }
  
  function choices(question, answer, option1, option2, option3, correct){ 
  header.innerHTML = question;  
    for (let i = 0; i < quiz[0].options.length; i++) {
        
      options[i].addEventListener("click", () => {
        if (i === answer) {
          judge.textContent = "Correct";
          header.innerHTML = correct;
          score++;
          scoreBoard.textContent = "Score: " + score;
          setTimeout(() => {
           next() 
          }, 1000);
        } 
        if(i !== answer){
          
          judge.textContent = "wrong"; 
        }
      });
    }

    options[0].textContent = option1;
    options[1].textContent = option2;
    options[2].textContent = option3;
  }
}

const quiz = [
  {
    question: "____ exam was yesterday",
    options: ["him", "he", "his"],
    answer: 2,
    correct: "<u>His</u> exam was yesterday"
  },
  {
    question: "The ___ was on the street",
    options: [ "man", "men", "mens"],
    answer: 0,
    correct: "The <u>man</u> was on the street"
  },
  {
    question: "The _____ toy was stolen",
    options: ["kids", "kid", "kid's"],
    answer: 2,
    correct: "The <u>kid's</u> toy was stolen"
  }
];


 