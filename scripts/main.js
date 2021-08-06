let init = (() => {
    let score = 0;

    // Here we will have the music logic. When to start playing, event listeners, etc.
    function playEarthMusic() {
        let song = document.getElementById("earth-sound");
        song.play();
    }

    function playWaterMusic() {
        let waterSound = document.getElementById("water-sound");
        waterSound.play();
    }

    function playCastleMusic() {
        let castleSound = document.getElementById("castle-sound");
        castleSound.play();
    }

    function pauseEarthMusic() {
        let song = document.getElementById("earth-sound");
        song.pause();
    }

    function pauseWaterMusic() {
        let waterSound = document.getElementById("water-sound");
        waterSound.pause();
    }

    function pauseCastleMusic() {
        let castleSound = document.getElementById("castle-sound");
        castleSound.pause();
    }
    // Here we will have the game logic, like when the buttons will turn green or point increments etc.

    function showGamePage() {
        let gameDiv = document.getElementById("game");
        gameDiv.style.display = "block";
    }
    function hideGamePage() {
        let gameDiv = document.getElementById("game");
        gameDiv.style.display = "none";
    }

    function showLevelsPage() {
        let levelsPage = document.getElementById("levels-page");
        levelsPage.style.display = "block";
    }

    function hideLevelsPage() {
        let levelsPage = document.getElementById("levels-page");
        levelsPage.style.display = "none";
    }

    let mainMenu = document.querySelector(".mainMenu");
    mainMenu.addEventListener("click", () => {
        hideLevelsPage();
        showGamePage();
    });

    let levelsSelectionBtn = document.querySelector(".levels-btn");
    levelsSelectionBtn.addEventListener("click", () => {
        hideGamePage();
        showLevelsPage();
    });

    function levelSelectFunctionality() {
        let selectBtn = document.querySelector(".selectBtn");
        let app = document.querySelector(".app");
        selectBtn.addEventListener("click", () => {
            showGamePage();
            hideLevelsPage();
            app.style.backgroundImage = `url("../images/${levels[i]}")`;
            if (levels[i] == "water.gif") {
                pauseEarthMusic();
                pauseCastleMusic();
                playWaterMusic();
            } else if ((levels[i] = "castle.gif")) {
                pauseEarthMusic();
                pauseWaterMusic();
                playCastleMusic();
            }

            if (app.style.backgroundImage == 'url("../images/earth.gif")') {
                pauseCastleMusic();
                playEarthMusic();
                pauseWaterMusic();
            }
        });

        let forwardSelectBtn = document.querySelector(".forwardSelectBtn");
        let backwardSelectBtn = document.querySelector(".backwardSelectBtn");
        levelsBox.style.backgroundImage = `url("../images/${levels[0]}")`;
        let i = 0;

        forwardSelectBtn.addEventListener("click", () => {
            let levelsBox = document.querySelector("#levelsBox");
            let levelsPage = document.querySelector("#levels-page");
            if (i < levels.length - 1) {
                i++;
            }

            levelsPage.style.backgroundImage = `url("../images/${levels[i]}")`;
            levelsBox.style.backgroundImage = `url("../images/${levels[i]}")`;
            console.log(i);
            console.log(levels[i]);
        });

        backwardSelectBtn.addEventListener("click", () => {
            if (i > 0) {
                i--;
            }
            console.log(i);
            console.log(levels[i]);
            console.log(levels);
            let levelsPage = document.querySelector("#levels-page");
            levelsPage.style.backgroundImage = `url("../images/${levels[i]}")`;
            levelsBox.style.backgroundImage = `url("../images/${levels[i]}")`;
        });
    }

    // let forwardSelectBtn = document.querySelector('.forwardSelectBtn')

    // i = 0;
    // forwardSelectBtn.addEventListener('click', ()=> {
    //     let levelsBox = document.querySelector('#levelsBox');
    //     levelsBox.style.backgroundImage = `url("../images/${levels[i]}")`
    //     i +=1

    // })

    const levels = Object.freeze(["earth.gif", "water.gif", "castle.gif"]);
    //returns levels but filtered by undefined items so it doesnt break level select

    function removeHomePageContent() {
        let gameStartBtn = document.querySelector(".start-btn");
        gameStartBtn.remove();

        let musicBtn = document.getElementById("home-page-music-btn");
        musicBtn.remove();

        document.querySelector(".hero-heading").remove();
    }

    function createMusicBtn() {
        let mainPage = document.querySelector(".app");

        let musicBtnContainer = document.createElement("button");
        musicBtnContainer.classList.add("music-btn-container");
        mainPage.appendChild(musicBtnContainer);

        let musicBtn = document.createElement("img");
        musicBtn.classList.add("music-btn-img");
        musicBtn.setAttribute("src", "../images/sound.png");
        musicBtnContainer.appendChild(musicBtn);

        musicBtn.addEventListener("click", () => {
            let musicPlaying = true;
            // Don't know what this is. (musicSound);

            if (musicPlaying) {
                pauseEarthMusic();
                pauseWaterMusic();
                pauseCastleMusic();

                musicPlaying = false;
            } else {
                musicSound.play();
                musicPlaying = true;
            }
        });
    }

    function populateLevel() {
        let mainPage = document.querySelector(".app");

        let gameQuestion = document.createElement("div");
        gameQuestion.classList.add("quiz-question-text");
        mainPage.appendChild(gameQuestion);

        // Could have a better name for this
        let answerNotifText = document.createElement("h2");
        answerNotifText.classList.add("answer-notif-text");
        answerNotifText.innerHTML = "Choose the correct option";
        mainPage.appendChild(answerNotifText);

        let choicesContainer = document.createElement("div");
        choicesContainer.classList.add("choices-container");
        mainPage.appendChild(choicesContainer);

        let numOfGameOptions = 3;
        for (let i = 0; i < numOfGameOptions; ++i) {
            let gameOptionBtn = document.createElement("button");
            gameOptionBtn.classList.add("game-option");
            gameOptionBtn.classList.add(`game-option-${i + 1}`);
            choicesContainer.appendChild(gameOptionBtn);
        }

        createMusicBtn();
        // musicBtn.remove(); // removes the music button from homescreen (Why is this needed?)

        let headerContainer = document.querySelector(".header-container");

        let scoreBoard = document.createElement("p");
        scoreBoard.classList.add("score-board");
        headerContainer.appendChild(scoreBoard);
    }

    function createQuizArr() {
        const quizArr = [
            {
                question: "____ exam was yesterday",
                choices: ["him", "he", "his"],
                answer: "his",
                correctSentence: "<u>His</u> exam was yesterday",
            },
            {
                question: "The ___ was on the street",
                choices: ["man", "men", "mens"],
                answer: "man",
                correctSentence: "The <u>man</u> was on the street",
            },
            {
                question: "What's my name on Discord? ___",
                choices: ["Wiz", "Wizz", "Wizard"],
                answer: "Wiz",
                correctSentence: "What's my name on Discord? <u>Wiz</u>.",
            },
            {
                question: "The _____ toy was stolen",
                choices: ["kids", "kid", "kid's"],
                answer: "kid's",
                correctSentence: "The <u>kid's</u> toy was stolen",
            },
            {
                question: "He told the man to help him ______",
                choices: ["build", "built", "building"],
                answer: "build",
                correctSentence: "He told the man to help him <u>build</u>.",
            },
        ];

        return quizArr;
    }

    function createRandomNum(arrLength) {
        let randomNum = Math.ceil(Math.random() * arrLength - 1);

        return randomNum;
    }

    function removeRedChange(option) {
        setTimeout(function () {
            option.classList.remove("redChange");
        }, 500);
    }

    function removeGreenChange(option) {
        setTimeout(function () {
            option.classList.remove("greenChange");
        }, 500);
    }

    function answerCheck(option, question) {
        let correctSentence = question.correctSentence;
        console.log(correctSentence);

        if (option.textContent === question.answer) {
            option.classList.add("greenChange");
            removeGreenChange(option);
            displayWin(correctSentence);
        } else {
            option.classList.add("redChange");
            removeRedChange(option);

            displayLoss();
        }

        // cleanOpArray();
    }

    function showNextBtn() {
        let mainPage = document.querySelector(".app");

        let nextBtnContainer = document.createElement("div");
        nextBtnContainer.classList.add("next-btn-container");
        mainPage.appendChild(nextBtnContainer);

        let nextBtn = document.createElement("button"); //creates the actual next button
        nextBtn.classList.add("next-btn");
        nextBtnContainer.appendChild(nextBtn);

        let answerNotifText = document.querySelector(".answer-notif-text");
        nextBtn.innerHTML = "Next ->";
        answerNotifText.innerHTML = "Well done!";
        nextBtn.addEventListener("click", () => playNextLevel());
    }

    function displayWin(correctSentence) {
        let answerNotifText = document.querySelector(".answer-notif-text");
        let gameQuestion = document.querySelector(".quiz-question-text");

        answerNotifText.textContent = "Correct";
        gameQuestion.innerHTML = correctSentence;

        score += 100;

        let scoreBoard = document.querySelector(".score-board");
        scoreBoard.innerHTML = `Score: ${score}`;
        setTimeout(() => {
            showNextBtn();
        }, 500);
    }

    function displayLoss() {
        let answerNotifText = document.querySelector(".answer-notif-text");
        answerNotifText.textContent = "Wrong";
    }

    function startGameLogic() {
        // score variable is declared at the top of this init() function.

        let scoreBoard = document.querySelector(".score-board");
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

        let gameOptionsArr = document.querySelectorAll(".game-option");
        gameOptionsArr.forEach((option) => {
            option.addEventListener("click", () => {
                console.log(option);
                answerCheck(option, randomQuestion);
            });
        });
    }

    function removePreviousLevelContent() {
        let nextBtnContainer = document.querySelector(".next-btn-container");
        nextBtnContainer.remove();

        let answerNotifText = document.querySelector(".answer-notif-text");
        answerNotifText.innerHTML = "Choose the correct option";

        let gameOptionsArr = document.querySelectorAll(".game-option");
        gameOptionsArr.forEach((option) => {
            option.remove();
        });

        let choicesContainer = document.querySelector(".choices-container");
        let numOfGameOptions = 3;
        for (let i = 0; i < numOfGameOptions; ++i) {
            let gameOptionBtn = document.createElement("button");
            gameOptionBtn.classList.add("game-option");
            gameOptionBtn.classList.add(`game-option-${i + 1}`);
            choicesContainer.appendChild(gameOptionBtn);
        }
    }

    function playNextLevel() {
        removePreviousLevelContent();
        startGameLogic();
    }

    function startGame() {
        playEarthMusic();
        removeHomePageContent();
        populateLevel();
        startGameLogic();
        levelSelectFunctionality();
    }

    let gameStartBtn = document.querySelector(".start-btn");
    gameStartBtn.addEventListener("click", () => startGame());
})();
