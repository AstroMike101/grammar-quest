let btnSound = document.querySelector("#bubble-sound");
let musicSound = document.querySelector("#music-sound");
let musicBtn = document.querySelector('.musicBtn'); 
let start = document.querySelector(".start-btn");
let body = document.querySelector(".app");
let headerDiv = document.querySelector('.headerDiv');
let demo = document.querySelector("#demo")
let isPlaying = false;
let score = 0;
let lives = document.querySelector('.lives')
let lifeCoutner = 3; 



function musicStart(){ 
    musicSound.play();  
}

lives.innerHTML = `<img class="heart" src="./images/heart.png"> ${lifeCoutner}`;
 
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

  let isPlaying = true;
  let header = document.createElement("div"); //  quiz question
  let judge = document.createElement("h2"); //says right or wrong under quiz
  // let score = 0;
  let options = Array.from({ length: 3 }, () =>
    document.createElement("button")
    
  );  
  //initialize new music button at bottom left
  let musicBtnMain = document.createElement("button")

//scoreboard creation, adding a class to it, and adding text
  let scoreBoard = document.createElement('p')
  scoreBoard.classList.add('scoreBoard')

  // scoreBoard.textContent = `Score: ${score}`;

 //creates a div for the choice buttons 
  let choicesDiv = document.createElement('div');
  choicesDiv.classList.add('choicesDiv');


  let nextBtnDiv = document.createElement('div');
  nextBtnDiv.classList.add('nextBtnDiv')
  

  let nextbtn = document.createElement("button")  
  body.appendChild(header);
  headerDiv.appendChild(scoreBoard);
  body.appendChild(judge);
  body.appendChild(choicesDiv);
  body.appendChild(nextBtnDiv);
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
  
  //appending the main musicBtn
  choicesDiv.appendChild(musicBtnMain)
  musicBtnMain.innerHTML = "<img class=\"music-btn-pic\" src=\"./images/sound.png\"></img>"
  musicBtnMain.classList.add("musicBtnmain")

  musicBtnMain.addEventListener("click", () => {
    if(isPlaying){
      musicSound.pause()
      isPlaying = false;
    }
    else{
      musicSound.play();
      isPlaying = true;
    } 
  })
  //removing old button
  musicBtn.remove();

  scoreBoard.textContent = `Score: ${score}`;

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
    nextBtnDiv.appendChild(nextbtn)
    nextbtn.textContent = "Next ->"
    judge.textContent = "Well done!"
    nextbtn.addEventListener("click", random)
  }
  
  function choices(question, answer, option1, option2, option3, correct){ 
  header.innerHTML = question;  
    for (let i = 0; i < quiz.length; i++) {
        
      options[i].addEventListener("click", () => {
        if (i === answer) {
          judge.textContent = "Correct";
          header.innerHTML = correct;
          score += 100;
          scoreBoard.textContent = `Score: ${score}`;
          setTimeout(() => {
           next() 
          }, 1000);
          
        } 
        if(i !== answer){
          judge.textContent = "wrong"; 
          
          lifeCoutner--;
          lives.innerHTML = `<img  class="heart"  src="./images/heart.png"> ${lifeCoutner}`;

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


 