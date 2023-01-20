var score = 0;
var currentQuestion = 0;
var counter;
var timer;

var startButton = document.querySelector('#start');
var submitButton = document.querySelector('#submit');
var startScreenElement = document.querySelector('#start-screen');
var questionsContainer = document.querySelector('#questions');
var questionsTitle = document.querySelector('#question-title');
var choicesContainer = document.querySelector('#choices');
var timerContainer = document.querySelector('#timer');
var endScreenContainer = document.querySelector('#end-screen');
var timerContainerText = document.getElementById('time');
var finalScoreContainer = document.getElementById('final-score');
var initialInput = document.getElementById('initials');
var highscoresContainer = document.getElementById('highscores');

function populateQuestion(question) {
    var currentQuestion = question.title;
    var currentChoices = question.choices;

    choicesContainer.innerHTML = '';
    questionsTitle.textContent = currentQuestion;
    var choicesList = document.createElement('ul');
    for (let i = 0; i < currentChoices.length; i++) {
        var choice = document.createElement('button');
        choice.textContent = currentChoices[i];
        choicesList.appendChild(choice);
    }
    choicesContainer.appendChild(choicesList)
}
