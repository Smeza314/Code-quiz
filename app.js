const start = document.getElementById('startQuiz');
const quiz = document.getElementById('quiz');
const question = document.getElementById('quizQ');
const choiceA = document.getElementById('a');
const choiceB = document.getElementById('b');
const choiceC = document.getElementById('c');
const choiceD = document.getElementById('d');
const choiceE = document.getElementById('e');
const timeGauge = document.getElementById('timeGauge');
const scoreBoard = document.getElementById('scoreBoard');
const progress = document.getElementById('progress');
const counter = document.getElementById('counter');










const questions_answers = [
  {
    questions: 'What is a string',
    answer_1: 'letters',
    answer_2: 'numbers',
    answer_3: 'true/false',
    answer_4: 'all of the above',
    answer: 'answer_1'
  }

{
    questions: 'What does an object begin with?',
    answer_1: '[',
    answer_2: '{',
    answer_3: '(',
    answer_4: '`',
    answer: 'answer_2'
  }

  {
    questions: 'Which of the following is a symbol for id?',
    answer_1: '.',
    answer_2: '!',
    answer_3: '$',
    answer_4: '#',
    answer: 'answer_4'
  }

  {
    questions: 'What do you code so that a form does not refresh automatically?',
    answer_1: 'document.getElementById',
    answer_2: 'function stopRefresh()',
    answer_3: 'event.preventDefault()',
    answer_4: 'none of the above',
    answer: 'answer_3'
  }

  {
    questions: 'which tag puts random text?',
    answer_1: '<p>',
    answer_2: '<lorem>',
    answer_3: '<div>',
    answer_4: '<h1>',
    answer: 'answer_2'
  }
];

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000);
}

// render progress
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

// counter render

function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;
    timeGauge.style.width = count * gaugeUnit + "px";
    count++
  } else {
    count = 0;
    // change progress color to red
    answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      // end the quiz and show the score
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

// checkAnwer

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    score++;
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    answerIsWrong();
  }
  count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(TIMER);
    scoreRender();
  }
}

// answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender() {
  scoreDiv.style.display = "block";



}