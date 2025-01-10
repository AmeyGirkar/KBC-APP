const welcomeScreen = document.getElementById("welcomeScreen");
const quizArea = document.getElementById("quizArea");
const resultScreen = document.getElementById("resultScreen");
const timerText = document.getElementById("timer");

const levels = [
    '&#x20B9; 1,000,000',
    '&#x20B9; 5,00,000',
    '&#x20B9; 2,50,000',
    '&#x20B9; 1,25,000',
    '&#x20B9; 64,000',
    '&#x20B9; 32,000',
    '&#x20B9; 16,000',
    '&#x20B9; 8,000',
    '&#x20B9; 4,000',
    '&#x20B9; 2,000',
    '&#x20B9; 1,000',
    '&#x20B9; 500',
    '&#x20B9; 300',
    '&#x20B9; 200',
    '&#x20B9; 100'
]

const questions = [
    {
      question: "Who is known as the Father of the Nation in India?",
      options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
      answer: 1
    },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: 1
    },
    {
      question: "Which is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
      answer: 1
    },
    {
        question: "Who is known as the Father of the Nation in India?",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
        answer: 1
      },
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: 2
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
      },
      {
        question: "Which is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        answer: 1
      },
      {
        question: "Who is known as the Father of the Nation in India?",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
        answer: 1
      },
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: 2
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
      },
      {
        question: "Which is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        answer: 1
      },
      {
        question: "Who is known as the Father of the Nation in India?",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
        answer: 1
      },
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: 2
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
      },
      {
        question: "Which is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        answer: 1
      }
];

let currentLevelIndex = levels.length - 1;
let currentQuestionIndex = 0;
let winningAmount = "&#x20B9; 0";
let timeInterval = 30;
let interval;

function startGame() {
    const username = document.getElementById("username").value;
    const error = document.getElementById("usernameError");

    if(username.trim() === ""){
        error.innerHTML = "Please enter username";
        return;
    }

    error.innerHTML = "";
    welcomeScreen.classList.add("hide");
    quizArea.classList.remove("hide");
    loadLevels();
    loadQuestion();
}

function loadLevels() {
    const levelList = document.getElementById("levelList");
    levelList.innerHTML = "";
    levels.forEach((level, index)=>{
        const levelDiv = document.createElement("li");
        levelDiv.classList.add("level");
        levelDiv.innerHTML = `
          <span class="levelNumber">${levels.length - index}</span>
          <span class="levelAmount">${level}</span>
        `;
        if(currentLevelIndex === index){
            levelDiv.classList.add("active");
        }
        levelList.appendChild(levelDiv);
    })
}
function loadQuestion() {
    const questionStatement = document.getElementById("questionStatement");
    const answers = document.getElementById("answers");
    answers.innerHTML = "";

    const currentQuestion = questions[currentQuestionIndex];

    questionStatement.innerHTML = currentQuestion.question;
    currentQuestion.options.forEach((option,index)=>{
        const answerDiv = document.createElement("div");
        answerDiv.classList.add("answer");
        answerDiv.innerHTML = option;
        answerDiv.addEventListener("click", () => checkAnswer(index));
        answers.appendChild(answerDiv);
    })

    timeInterval = 30;
    interval = setInterval(timer,1000)
}

function timer() {
    if(timeInterval == 0){
        clearInterval(interval);
        manageResut();
    }
    timerText.innerHTML = timeInterval;
    timeInterval--;
}


function checkAnswer(option) {
    const currentQuestion = questions[currentQuestionIndex];

    if(option !== currentQuestion.answer){
        manageResut()
    }
    currentQuestionIndex++;
    winningAmount = levels[currentLevelIndex];
    currentLevelIndex--;
    clearInterval(interval);
    if(currentLevelIndex < 0){
        manageResut(true)
    }
    loadLevels();
    loadQuestion();
}

function manageResut(userWon = false) {
    const priceMoney = document.getElementById("priceMoney");
    const message = document.getElementById("message");
    if(userWon){
        priceMoney.innerHTML = `You won: ${levels[0]}`;
        message.innerHTML = "Congratulations!"
        quizArea.classList.add("hide");
        resultScreen.classList.remove("hide");
        return;
    }
    priceMoney.innerHTML = `You won: ${winningAmount}`;
    quizArea.classList.add("hide");
    resultScreen.classList.remove("hide");
}
