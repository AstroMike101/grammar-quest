let init = (() => {
    let score = 0;

    // Here we will have the music logic. When to start playing, event listeners, etc.  
    function playMusic(){
        let song = document.getElementById("music-sound");
        song.play();  
    }
  
    // Here we will have the game logic, like when the buttons will turn green or point increments etc.
    function hideGamePage() {
        let gameDiv = document.getElementById('game');
        gameDiv.style.display = 'none';
    }

    function showLevelsPage() {
        let levelsPage = document.getElementById('levels-page');
        levelsPage.style.display = 'block';
    }

    let levelsSelectionBtn = document.querySelector('.levels-btn');
    levelsSelectionBtn.addEventListener('click', () => { 
        hideGamePage();
        showLevelsPage();
    });

    function removeHomePageContent() {
        let gameStartBtn = document.querySelector(".start-btn");
        gameStartBtn.remove();

        let musicBtn = document.getElementById('home-page-music-btn');
        musicBtn.remove();

        document.querySelector(".hero-heading").remove();
    }

    function createMusicBtn() {
        let mainPage = document.querySelector('.app');

        let musicBtnContainer = document.createElement('button');
        musicBtnContainer.classList.add('music-btn-container');
        mainPage.appendChild(musicBtnContainer);

        let musicBtn = document.createElement('img');
        musicBtn.classList.add('music-btn-img');
        musicBtn.setAttribute('src', '../images/sound.png');
        musicBtnContainer.appendChild(musicBtn);

        musicBtn.addEventListener("click", () => {
            let musicPlaying = true;
            // Don't know what this is. (musicSound);
            let musicSound = document.querySelector("#music-sound");

            if (musicPlaying) {
              musicSound.pause()
              musicPlaying = false;
            }
            else {
              musicSound.play();
              musicPlaying = true;
            }
        });
    }

    function populateLevel() {
        let mainPage = document.querySelector('.app');

        let gameQuestion = document.createElement("div");
        gameQuestion.classList.add("quiz-question-text");
        mainPage.appendChild(gameQuestion);

        // Could have a better name for this
        let answerNotifText = document.createElement('h2');
        answerNotifText.classList.add('answer-notif-text');
        answerNotifText.innerHTML = "Choose the correct option";
        mainPage.appendChild(answerNotifText);

        let choicesContainer = document.createElement('div');
        choicesContainer.classList.add('choices-container');
        mainPage.appendChild(choicesContainer);

        let numOfGameOptions = 3;
        for (let i = 0; i < numOfGameOptions; ++i) {
            let gameOptionBtn = document.createElement('button');
            gameOptionBtn.classList.add('game-option');
            gameOptionBtn.classList.add(`game-option-${i + 1}`);
            choicesContainer.appendChild(gameOptionBtn);
        }

        createMusicBtn();
        // musicBtn.remove(); // removes the music button from homescreen (Why is this needed?)

        let headerContainer = document.querySelector('.header-container');

        let scoreBoard = document.createElement('p');
        scoreBoard.classList.add('score-board');
        headerContainer.appendChild(scoreBoard);
    }

    function createQuizArr() {
        const quizArr = [
            {
              question: "____ exam was yesterday",
              choices: ['him', 'he', 'his'],
              answer: 'his',
              correctSentence: "<u>His</u> exam was yesterday"
            },
            {
              question: "The ___ was on the street",
              choices: [ "man", "men", "mens"],
              answer: 'man',
              correctSentence: "The <u>man</u> was on the street"
            },
            {
              question: "What's my name on Discord? ___",
              choices: [ "buug", "bug", "buggy"],
              answer: 'buug',
              correctSentence: "What's my name on Discord? <u>buug</u>."
            },
            {
              question: "The _____ toy was stolen",
              choices: ["kids", "kid", "kid's"],
              answer: 'kid\'s',
              correctSentence: "The <u>kid's</u> toy was stolen"
            }, 
        ];

        return quizArr
    }

    function createRandomNum(arrLength) {
        let randomNum = Math.ceil(Math.random() * arrLength -1);

        return randomNum;
    }

    function removeRedChange(option) {
        setTimeout(function(){ option.classList.remove("redChange");}, 500);
    }

    function removeGreenChange(option) {
        setTimeout(function(){ option.classList.remove("greenChange");}, 500);
    }

    function answerCheck(option, question) {
        let correctSentence = question.correctSentence;
        console.log(correctSentence);
  
        if (option.textContent === question.answer) {
            option.classList.add('greenChange');
            removeGreenChange(option);

            displayWin(correctSentence);
        }
        else {
            option.classList.add("redChange");
            removeRedChange(option);

            displayLoss();
        }
        
        // cleanOpArray();
    }

    function showNextBtn(){
        let mainPage = document.querySelector('.app');

        let nextBtnContainer = document.createElement('div');
        nextBtnContainer.classList.add('next-btn-container');
        mainPage.appendChild(nextBtnContainer);

        let nextBtn = document.createElement("button");  //creates the actual next button 
        nextBtn.classList.add("next-btn");
        nextBtnContainer.appendChild(nextBtn);

        let answerNotifText = document.querySelector('.answer-notif-text');
        nextBtn.innerHTML = "Next ->";
        answerNotifText.innerHTML = "Well done!";
        nextBtn.addEventListener( "click", () => playNextLevel() );
    }

    function displayWin(correctSentence) {
        let answerNotifText = document.querySelector('.answer-notif-text');
        let gameQuestion = document.querySelector(".quiz-question-text");

        answerNotifText.textContent = "Correct";
        gameQuestion.innerHTML = correctSentence;

        score += 100;

        let scoreBoard = document.querySelector('.score-board');
        scoreBoard.innerHTML = `Score: ${score}`;
        setTimeout( () => { showNextBtn() }, 500);
    }

    function displayLoss() {
        let answerNotifText = document.querySelector('.answer-notif-text');
        answerNotifText.textContent = "Wrong"; 
    }

    function startGameLogic() {
        // score variable is declared at the top of this init() function.
        
        let scoreBoard = document.querySelector('.score-board');
        scoreBoard.textContent = `Score: ${score}`;

        let quizArr = createQuizArr();
        let randomNum = createRandomNum(quizArr.length);
        let randomQuestion = quizArr[randomNum];

        let gameQuestion = document.querySelector(".quiz-question-text");
        gameQuestion.innerHTML = randomQuestion.question;

        let numOfGameOptions = 3;
        for (let i = 0; i < numOfGameOptions; ++i) {
            let gameOptionBtn = document.querySelector(`.game-option-${i + 1}`);
            
            let choicesArr = randomQuestion.choices;
            let choice = choicesArr[i];
            
            gameOptionBtn.innerHTML = choice;
        }

        let gameOptionsArr = document.querySelectorAll('.game-option');
        gameOptionsArr.forEach(option => {
            option.addEventListener('click',() => {
                console.log(option);
                answerCheck(option, randomQuestion);
            });
        });
    }

    function removePreviousLevelContent() {
        
        let nextBtnContainer = document.querySelector('.next-btn-container');
        nextBtnContainer.remove();
        
        let answerNotifText = document.querySelector('.answer-notif-text');
        answerNotifText.innerHTML = "Choose the correct option";

        let gameOptionsArr = document.querySelectorAll('.game-option');
        gameOptionsArr.forEach(option => {
            option.addEventListener('click',() => {
                option.remove();
            });
        });
    }

    function playNextLevel() {
        removePreviousLevelContent();
        startGameLogic();
    }

    function startGame() {
        playMusic();
        removeHomePageContent();
        populateLevel();
        startGameLogic();
    }

    let gameStartBtn = document.querySelector(".start-btn");
    gameStartBtn.addEventListener( 'click', () => startGame() );
  
    // Here we will have the logic that involves the levels.
  
})();