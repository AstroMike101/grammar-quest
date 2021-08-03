let init = (() => {

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
        document.querySelector(".hero-heading").remove();
    }

    function createMusicBtn() {
        let body = document.querySelector('body');

        let musicBtnContainer = document.createElement('button');
        musicBtnContainer.classList.add('music-btn-container');
        body.appendChild(musicBtnContainer);

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
        let body = document.querySelector('body');

        let gameQuestion = document.createElement("div");
        gameQuestion.classList.add("quiz-question-text");
        body.appendChild(gameQuestion);

        // Could have a better name for this
        let answerNotifText = document.createElement('h2');
        answerNotifText.classList.add('answer-notif-text');
        answerNotifText.innerHTML = "Choose the correct option";
        body.appendChild(answerNotifText);

        let choicesContainer = document.createElement('div');
        choicesContainer.classList.add('choices-container');
        body.appendChild(choicesContainer);

        let numOfGameOptions = 3;
        for (let i = 0; i < numOfGameOptions; ++i) {
            let gameOption = document.createElement('button');
            gameOption.classList.add('game-option');
            choicesContainer.appendChild(gameOption);
        }

        createMusicBtn();
        // musicBtn.remove(); // removes the music button from homescreen (Why is this needed?)

        let headerContainer = document.querySelector('.header-container');

        let scoreBoard = document.createElement('p');
        scoreBoard.classList.add('score-board');
        headerContainer.appendChild(scoreBoard);

        let nextBtnContainer = document.createElement('div');
        nextBtnContainer.classList.add('next-btn-container');
        body.appendChild(nextBtnContainer);

        let nextBtn = document.createElement('button');
        nextBtn.classList.add('next-btn');

        answerNotifText.innerHTML = 'Choose the correct option:';
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
              answer: 'kids',
              correctSentence: "The <u>kid's</u> toy was stolen"
            }, 
        ];

        return quizArr
    }

    function startGameLogic() {
        let quizArr = createQuizArr();
        console.log('play');

        let score = 0;
        let scoreBoard = document.querySelector('.score-board');
        scoreBoard.textContent = `Score: ${score}`;
    }

    function startGame() {
        playMusic();
        removeHomePageContent();
        populateLevel();
        startGameLogic();
    }

    let gameStartBtn = document.querySelector(".start-btn");
    gameStartBtn.addEventListener( 'click', startGame() );
  
    // Here we will have the logic that involves the levels.
  
});