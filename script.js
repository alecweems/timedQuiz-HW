var questions = [
    {
        question: "What was the first language we learned?",
        answer1: "Python",
        answer2: "HTML",
        answer3: "Ruby",
        answer4: "C#",
        correct: "2"
    },
    {
        question: "What does CSS stand for?",
        answer1: "Creative Sheet Style",
        answer2: "Colonel Sanders' Style",
        answer3: "Cascading Style Sheet",
        answer4: "Cascade Sheets for Styling",
        correct: "3"
    },
    {
        question: "JavaScript adds _________ to web pages.",
        answer1: "Functionality",
        answer2: "Creative Style",
        answer3: "Color",
        answer4: "Viewers",
        correct: "1"
    },
    {
        question: "We also learned about another way to style the web page, what was that called?",
        answer1: "Bob Ross's Style Sheets",
        answer2: "MS-Paint",
        answer3: "Photoshop",
        answer4: "Bootstrap",
        correct: "4"

    },
    {
        question: "Bootstrap is to CSS as _________ is to JavaScript",
        answer1: "Java",
        answer2: "JQuery",
        answer3: "Java Juice",
        answer4: "Javastrap",
        correct: "2"
    },

]
var startButton = document.getElementById("start-btn")
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("questionDiv")
var answerElement = document.getElementById("answer-buttons")


// Starting the game starts the timer
startButton.addEventListener("click", startGame)


function startGame() {
    console.log("Started")
    startButton.classList.add("hide")
    questionContainerElement.classList.remove("hide")
    startTimer();
    showQuestion();
    updateScore();
}
var timer = document.getElementById("timer")
var secondsDisplay = document.getElementById("seconds")
var totalSeconds = 60;

function startTimer() {
    var interval = setInterval(function tick() {
        // secondsDisplay.textContent = Math.floor((totalSeconds - 1) % 60);
        secondsDisplay.textContent = totalSeconds;
        totalSeconds--;
        if (totalSeconds <= -1) {
            clearInterval(interval);
            secondsDisplay.textContent = "done!";
            endGame();


        }
    }, 1000)
}
// Once the start button is pressed, the first question should populate

var questionDiv = document.getElementById("quetsionDiv");
var answerDiv1 = document.getElementById("ans1Div");
var answerDiv2 = document.getElementById("ans2Div");
var answerDiv3 = document.getElementById("ans3Div");
var answerDiv4 = document.getElementById("ans4Div");
var answerDivArray = [answerDiv1, answerDiv2, answerDiv3, answerDiv4]
var questionNumber = 0;
var correctAnswer = questions[questionNumber].correct;

var score = 0;
function showQuestion() {
    if (questionNumber === questions.length) {
        endGame();
        return
    }
    questionElement.innerText = questions[questionNumber].question;
    console.log(questions[questionNumber].question);
    answerDiv1.innerText = questions[questionNumber].answer1;
    answerDiv2.innerText = questions[questionNumber].answer2;
    answerDiv3.innerText = questions[questionNumber].answer3;
    answerDiv4.innerText = questions[questionNumber].answer4;
    correctAnswer = questions[questionNumber].correct;
    console.log(correctAnswer)

}
answerDivArray.forEach(function (e) {

    e.addEventListener("click", function () {
        var selectedAnswer = e.getAttribute("answer")
        if (selectedAnswer === correctAnswer) {
            console.log("Correct");
            score = score + 100;
            updateScore();
            questionNumber++;
            showQuestion();

        } else if (selectedAnswer !== correctAnswer) {
            totalSeconds = totalSeconds - 10;
            questionNumber++;
            showQuestion();
        }
    })
}

);

function endGame() {
    questionContainerElement.remove("hide");
    secondsDisplay.textContent = "done!";
    totalSeconds = 0;
    
}

function updateScore() {
    document.getElementById("points").textContent = score;

}

