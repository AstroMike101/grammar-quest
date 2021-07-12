let btnSound = document.querySelector("#bubble-sound");
let musicSound = document.querySelector("#music-sound");
let musicBtn = document.querySelector('.musicBtn'); 
let start = document.querySelector(".start-btn");
let body = document.querySelector(".app");
let isPlaying = false

function musicStart(){
  if(isPlaying){
    musicSound.pause()
    isPlaying = false
  }
  else{
    musicSound.play();
    isPlaying = true 
  } 
   
}
 
start.addEventListener("mouseover", () => {
  btnSound.play();
  
});

start.addEventListener("click", () => {
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
  let nextbtn = document.createElement("button") 
  
  body.appendChild(header);
  body.appendChild(judge);
  body.appendChild(options[0]);
  body.appendChild(options[1]);
  body.appendChild(options[2]);

  judge.classList.add("judge")
  header.classList.add("quiz-scr")
  judge.textContent = "Choose the correct option";
  options[0].classList.add("choices")
  options[1].classList.add("choices")
  options[2].classList.add("choices")
  nextbtn.classList.add("nextBtn")

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

const quiz = [
  {
    question: "____ exam was yesterday",
    options: ["him", "he", "his"],
    answer: 2,
    correct: "<u>His</u> exam was yesterday"
  },
  {
    question: "The ___ was on the street",
    options: ["men", "man", "mens"],
    answer: 1,
    correct: "The <u>man</u> was on the street"
  },
  {
    question: "The _____ toy was stolen",
    options: ["kids", "kid", "kid's"],
    answer: 2,
    correct: "The <u>kid's</u> toy was stolen"
  }
];


 