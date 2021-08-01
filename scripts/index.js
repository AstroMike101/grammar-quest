let btnSound = document.querySelector("#bubble-sound");
let musicSound = document.querySelector("#music-sound"); // the music thats playing
let musicBtn = document.querySelector('.musicBtn');  //the music button 
let start = document.querySelector(".start-btn");
let body = document.querySelector(".app");
let headerDiv = document.querySelector('.headerDiv');
let demo = document.querySelector("#demo")
let isPlaying = false; 
let levelsBtn = document.querySelector('.levelsBtn');
let levelsPage = document.querySelector('#levels-page');
let gameDiv = document.querySelector('#game');

//function to begin the music 
function musicStart(){ 
    musicSound.play();  
}

function hideGamePage() {
  gameDiv.style.display = 'none';
}

function showLevelsPage() {
  levelsPage.style.display = 'block';
}

levelsBtn.addEventListener('click', () => { 
  hideGamePage();
  showLevelsPage();
})

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
  header.classList.add("quiz-scr") 
  body.appendChild(header);
  let judge = document.createElement("h2"); //says right or wrong under quiz 
  judge.classList.add("judge")
  judge.textContent = "Choose the correct option"; 

  body.appendChild(judge);
  let options = Array.from({ length: 3 }, () =>
    document.createElement("button") //creates 3 buttons
    
  );  
  //creates a div for the choice buttons 
  let choicesDiv = document.createElement('div');
  choicesDiv.classList.add('choicesDiv');
  body.appendChild(choicesDiv);
  choicesDiv.appendChild(options[0]);
  choicesDiv.appendChild(options[1]);
  choicesDiv.appendChild(options[2]);

  //initialize new music button at bottom left
  let musicBtnMain = document.createElement("button")
  musicBtnMain.classList.add("musicBtnmain")
  choicesDiv.appendChild(musicBtnMain);
  musicBtnMain.innerHTML = "<img class=\"music-btn-pic\" src=\"../images/sound.png\"></img>"  // music button image
  musicBtn.remove(); // removes the music button from homescreen

  

//scoreboard creation, adding a class to it, 
  let scoreBoard = document.createElement('p')
  scoreBoard.classList.add('scoreBoard')
  headerDiv.appendChild(scoreBoard); 
  //adds the scoreboard to the headerDiv, which is the div that houses levelSelect and score

  // scoreBoard.textContent = `Score: ${score}`;


//creates a Div that houses the Next button
  let nextBtnDiv = document.createElement('div');
  nextBtnDiv.classList.add('nextBtnDiv')
  body.appendChild(nextBtnDiv);
  

  let nextbtn = document.createElement("button")  //creates the actual next button 
  nextbtn.classList.add("nextBtn")
  


  judge.textContent = "Choose the correct option:";
  //adds the choices class to all three option buttons
  options[0].classList.add("choices")
  options[1].classList.add("choices")
  options[2].classList.add("choices")
 
  
  
// if music is playing and button is clicked, stop it, and likewise if not playing
  
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



//initialize score and sets the scoreboard to score
  let score = 0;
  scoreBoard.textContent = `Score: ${score}`;

  
  function random() {
    let random = Math.ceil(Math.random() * quiz.length -1);

      choices(
        quiz[random].question,
        quiz[random].answer,
        quiz[random].options[0],
        quiz[random].options[1],
        quiz[random].options[2],
        quiz[random].correct,
        quiz[random].options
        );
        nextbtn.remove() 
    }

    random();
  
  function next(){
    nextBtnDiv.appendChild(nextbtn);
    nextbtn.textContent = "Next ->"
    judge.textContent = "Well done!"
    nextbtn.addEventListener("click", () => random());
  }


  
  function choices(question, answer, option1, option2, option3, correct, op){
    
    header.textContent = question;  

    let scoreText = document.querySelector('.scoreBoard');

    // function cleanOpArray() {
    //   opArray.splice(0, 1);
    // }

    function removeRedChange(option) {
    setTimeout(function(){ option.classList.remove("redChange");}, 500);
    }

    function removeGreenChange(option) {
    setTimeout(function(){ option.classList.remove("greenChange");}, 500);
    }

    function displayWin() {
    judge.textContent = "Correct";
    header.innerHTML = correct;
    score += 100;
    scoreText.innerHTML = `Score: ${score}`;
    setTimeout(() => {next()}, 500);
    }

    function displayLoss() {
    judge.textContent = "Wrong"; 
    }



    function answerCheck(option) {
      
      console.log(op);
      console.log(op[answer]);

      if (option.textContent === op[answer]) {
        option.classList.add('greenChange');
        removeGreenChange(option);
        displayWin();
        
      }
      else {
        option.classList.add("redChange");
        removeRedChange(option);
        displayLoss();
      }
      
      // cleanOpArray();
    }

    // Checks each option for a win or loss on click.
    options.forEach(option => {
      option.addEventListener('click',() => {
        answerCheck(option)
      });
    });

      // options.forEach(option => option.addEventListener("click", () => {
      //   if (option.textContent === op[answer]) {
      //       option.classList.add("greenChange");
      //       setTimeout(function(){
      //         option.classList.remove("greenChange");
      //       },500);
          
      //     judge.textContent = "Correct";
      //     header.innerHTML = correct;
      //     score += 100;
      //     scoreText.innerHTML = `Score: ${score}`;

      //     setTimeout(() => {
      //      next() 
      //     }, 500);
          
      //   } 
        

      //   else {
      //     option.classList.add("redChange");
      //     setTimeout(function(){
      //       option.classList.remove("redChange");
      //     },500);
      //     judge.textContent = "Wrong"; 
      //   }

      // }, {once: true}));
    
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
    question: "What's my name on Discord? ___",
    options: [ "buug", "bug", "buggy"],
    answer: 0,
    correct: "What's my name on Discord? <u>buug</u>."
  },
  {
    question: "The _____ toy was stolen",
    options: ["kids", "kid", "kid's"],
    answer: 2,
    correct: "The <u>kid's</u> toy was stolen"
  }, 
  
  
];
