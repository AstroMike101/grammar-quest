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

    let levelsSelectionBtn = document.querySelector('.levelsBtn');
    levelsSelectionBtn.addEventListener('click', () => { 
        hideGamePage();
        showLevelsPage();
    });

    function removeHomePageContent() {
        let gameStartBtn = document.querySelector(".start-btn");

        gameStartBtn.remove();
        document.querySelector(".hero-heading").remove();
    }

    function startGame() {
        playMusic();
        removeHomePageContent();
        mainGameFunction();
    }

    let gameStartBtn = document.querySelector(".start-btn");
    gameStartBtn.addEventListener( 'click', startGame() );

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
  
    // Here we will have the logic that involves the levels.
  
})();